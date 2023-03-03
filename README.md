# HostWebsiteAmazonS3
Host a static website for free with Amazon S3 
You can host a static website for free for a period of 12 months using Amazon S3 service.
Here are the simple steps to follow.
<ol>
<li>Sign in to the AWS Management Console and navigate to the S3 service.</li>
<li>Click on the "Create Bucket" button and enter a unique name for your bucket. This name must be globally unique across all of AWS, so choose something specific and not already in use.</li>
<li>Choose the region where you want to host your website. This should be the region closest to your users for optimal performance.</li>
<li>Leave all the default settings and enable public access to website. For a public website, you will need to select "Grant public read access to this bucket".</li>
<li>Click on "Create Bucket" to create your new S3 bucket.</li>
<ul>
<li>Upload your website files (HTML, CSS, JS, images, etc.) to the S3 bucket using the "Upload" button. Alternatively, you can drag and drop files into the bucket. The uploaded files are visible in the Objects tab</li>
<li>In the S3 bucket, click on the "Properties" tab and then click on "Static website hosting" at the bottom of page.</li>
<li>Choose "Use this bucket to host a website" and enter the name of your index document (usually "index.html").</li>
<li>In permissions tab, navigate to the bucket policy. The bucket policy, written in JSON, provides access to the objects stored in the bucket. Use the following json object to enable public read access for the bucket we created.
'''{
    "Version": "2012-10-17",
    "Statement": [
        {
            "Sid": "PublicReadGetObject",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "arn:aws:s3:::resume-ramya/*"
        }
    ]
}
'''
<li>Once the files have been uploaded, you can view your website by clicking on the Object URL link under the bucket's Objects properties.
</li>
<li>Navigate to the buckets->click on created bucket->root folder(index.html)->Object overview->Object URL link.  This link will take you to your website hosted on S3.</li>
