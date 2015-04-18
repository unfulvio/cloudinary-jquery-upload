Package.describe({

  name: 'nekojira:cloudinary-jquery-upload',
  version: '0.1.0',
  summary: 'Support libraries for image uploads to Cloudinary using jQuery.',
  git: 'https://github.com/nekojira/cloudinary-jquery-upload',
  documentation: 'README.md'

});

Package.onUse(function(api) {

  api.versionsFrom('1.1.0.2');

  api.use('jquery', 'client');

  api.add_files([
    'vendor/jquery.ui-widget.js',
    'vendor/jquery.iframe-transport.js',
    'vendor/jquery.fileupload.js',
    'vendor/jquery.cloudinary.js'
    ], 'client');

});