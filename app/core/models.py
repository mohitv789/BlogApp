from django.db import models, transaction
import os, uuid, time
from django.template.defaultfilters import slugify
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser
from django.contrib.auth.models import PermissionsMixin
from django.template.defaultfilters import slugify
from django.conf import settings
from rest_framework_simplejwt.tokens import RefreshToken
from django.db.models.signals import post_save
from django.contrib.auth.models import User

def snippet_image_file_path(instance, filename):
    ext = os.path.splitext(filename)[1]
    filename = f'{uuid.uuid4()}{ext}'
    return os.path.join('uploads', 'snippets', filename)

def poster_file_path(instance, filename):
    ext = os.path.splitext(filename)[1]
    filename = f'{uuid.uuid4()}{ext}'
    return os.path.join('uploads', 'autoblog', filename)

class UserManager(BaseUserManager):

    def create_user(self, email,password=None):
        if not email:
            raise ValueError('Users Must Have an email address')

        user = self.model(
            email = self.normalize_email(email)
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password):

        if password is None:
            raise TypeError('Superusers must have a password.')

        user = self.create_user(email, password)
        user.is_superuser = True
        user.is_staff = True
        user.save()
        return user


AUTH_PROVIDERS = {'email': 'email'}

class User(AbstractBaseUser,PermissionsMixin):
    email = models.EmailField(
        verbose_name='email address',
        max_length=255,
        unique=True
        )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    objects = UserManager()

    def __str__(self):
        return self.email

    def save(self,*args,**kwargs):
        super(User, self).save(*args, **kwargs)

    def tokens(self):
        refresh = RefreshToken.for_user(self)
        return {
            'refresh': str(refresh),
            'access': str(refresh.access_token)
        }
        

class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='user_profile')
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female'),
    )
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    first_name = models.CharField(max_length=120)
    last_name = models.CharField(max_length=120)
    city = models.CharField(max_length=120)
    url = models.URLField(max_length=200)
    avatar = models.TextField()
    bio = models.TextField()

    def __str__(self):
        return self.first_name
    
    def save(self,*args,**kwargs):
        super(Profile, self).save(*args, **kwargs)




class AutoBlogSections(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    slug = models.SlugField(blank=True,editable=False)
    problem = models.TextField()
    solution = models.TextField()
    ref_image = models.TextField(null=True)
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,null=True,on_delete=models.CASCADE)
    def __str__(self):
        return self.title
    def save(self, *args, **kwargs):
        string = "%s" % ("-".join(self.title.split(" ")))
        self.slug = slugify(string)
        super(AutoBlogSections,self).save(*args, **kwargs)


class AutoBlogPost(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(blank=True,editable=False)
    description = models.TextField()
    sections = models.ManyToManyField(AutoBlogSections,related_name="blog_sections",blank=True, null=True)
    poster = models.TextField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,blank=False,on_delete=models.CASCADE)

    def __str__(self):
        return self.title
    def save(self, *args, **kwargs):
        string = "%s" % ("-".join(self.title.split(" ")))
        self.slug = slugify(string)
        super(AutoBlogPost,self).save(*args, **kwargs)

class WebdevPost(models.Model):
    title = models.CharField(max_length=255)
    slug = models.SlugField(blank=True,editable=False)
    description = models.TextField()
    content = models.TextField()
    owner = models.ForeignKey(settings.AUTH_USER_MODEL,blank=False,on_delete=models.CASCADE)
    liked_by = models.ManyToManyField('User', through='WebdevLike', related_name="liked_by",blank=True, null=True)
    def __str__(self):
        return self.title

    def save(self, *args, **kwargs):
        string = "%s" % ("-".join(self.title.split(" ")))
        self.slug = slugify(string)
        super(WebdevPost,self).save(*args, **kwargs)

class WebdevLike(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
    webdev = models.ForeignKey(WebdevPost, on_delete=models.CASCADE)
    class Meta:
        unique_together = ('user', 'webdev',)

class WebdevComment(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,blank=False,on_delete=models.CASCADE)
    webpost = models.ForeignKey(WebdevPost,blank=False,on_delete=models.CASCADE)
    body = models.CharField(max_length=1000)
    slug = models.SlugField(blank=True,editable=False)

    def save(self, *args, **kwargs):
        string = "%s" % ("-".join(self.body[:25].split(" ")))
        self.slug = slugify(string)
        super(WebdevComment,self).save(*args, **kwargs)

