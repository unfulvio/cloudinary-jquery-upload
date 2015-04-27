# Cloudinary jQuery Uploads

Simple [Meteor](https://www.meteor.com/) package with support libraries for uploading images to [Cloudinary](http://cloudinary.com/) using jQuery method.

This package for the moment only enqueues the necessary scripts and Cloudinary jQuery plugin as indicated in [Cloudinary documentation](http://cloudinary.com/documentation/jquery_image_upload):

    <script src='jquery.ui.widget.js' type='text/javascript'></script>
    <script src='jquery.iframe-transport.js' type='text/javascript'></script>
    <script src='jquery.fileupload.js' type='text/javascript'></script>
    <script src='jquery.cloudinary.js' type='text/javascript'></script>

You will need to configure your settings to upload files to your own cloud and set up a file upload input as described here: http://cloudinary.com/documentation/jquery_image_upload#direct_uploading_environment_setup

Read more also from [Cloudinary blog](http://cloudinary.com/blog/direct_upload_made_easy_from_browser_or_mobile_app_to_the_cloud).
