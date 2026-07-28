# Updating the KASA Website in Contentful

This guide is for KASA members who need to update the website but are not
developers. You should not need to edit code for normal content changes.

## What Contentful controls

Contentful currently supplies:

- the large banner image at the top of the Home, Families, and Events pages;
- event titles, descriptions, dates, images, and videos; and
- executive names, roles, and photos.

Changes must be **published** before they appear on the public website. Saving a
draft is not enough.

## Before you edit anything

1. Sign in to Contentful.
2. Check the space and environment selector near the upper-right corner.
3. Make sure you are in the KASA space and the **master** environment.
4. Decide whether you are changing text, adding a new item, or replacing an
   image.

If you are unsure about the space or environment, stop and ask a previous site
manager. Publishing in the wrong environment will not update the website.

## The two areas you will use

### Content

Use the **Content** tab for website records such as:

- `home`, `families`, and `events` banners;
- events; and
- executive members.

Think of these as forms that tell the website what to display.

### Media

Use the **Media** tab for image and video files.

Media files can be linked to one or more Content entries. On an asset page, the
**Links** section on the right shows which entries use that file.

## Updating the homepage hero image

The homepage hero is controlled by a Banner entry whose Page value is `home`.

### Safest method: upload a new image

1. Prepare the image before opening Contentful:
   - use a wide, landscape photograph;
   - aim for roughly **2400–3000 pixels wide**;
   - use JPG or WebP;
   - keep the file below about **5 MB** when practical; and
   - do not repeatedly export an already compressed image.
2. Open **Media** in the top navigation.
3. Select **Add asset**, then **Single asset**.
4. Enter a clear title, such as `KASA Show 2026 homepage hero`.
5. Under **File**, upload the prepared image.
6. Publish the asset.
7. Open **Content** in the top navigation.
8. Filter for the Banner content type, then open the entry named `home`.
9. In its Image field, remove the old selection and choose the new asset.
10. Confirm that the Page field still says exactly `home`.
11. Publish the `home` entry.

This method keeps the old asset available in Media in case you need to switch
back.

### If you are already looking at the existing asset

If the asset page shows a blue `home` link under **Links**, that is the correct
homepage asset.

You can:

- click the blue `home` link to open the Banner entry that uses it;
- use the buttons beneath the image to rotate, resize, or crop it; or
- return to Media and upload a separate replacement asset.

After editing an existing image, select **Publish changes** from the status
controls.

Do not delete a linked asset before replacing it in the `home` entry. Deleting
it first can leave the homepage with a broken image.

## Updating the Families or Events banner

Follow the same process as the homepage banner, but open the appropriate Banner
entry.

Keep the Page field set to:

- `home` for the homepage;
- `families` for the Families page; or
- `events` for the Events page.

These values tell the website where each image belongs.

## Adding or updating an event

1. Open **Content**.
2. Filter for the Event content type.
3. To edit an event, open it. To add one, select **Add entry** and choose Event.
4. Complete the fields:
   - **Title:** the public event name;
   - **Description:** the text shown on the event card and detail page;
   - **Date:** the actual event date;
   - **Image:** a published landscape image; and
   - **Video:** optional. Large videos can be slow, so only add one when needed.
5. Publish any newly uploaded image or video asset.
6. Publish the Event entry.
7. Open the website’s Events page and confirm the event appears.

For event images, a landscape image around 1600–2000 pixels wide is normally
enough.

## Adding or updating an executive

1. Open **Content**.
2. Filter for the Executive Member content type.
3. Open an existing member or add a new Executive Member entry.
4. Complete the Name, Role, and Photo fields.
5. Publish the photo asset.
6. Publish the Executive Member entry.

Use one of these Role values so the person appears in the correct section:

- `President`
- `Cultural`
- `Publicity`
- `Fundraising`
- `Community Development`
- `Outreach`
- `Wellness`
- a role containing `Family`
- `Social Media`
- `Secretary`
- `Finance`

Unknown or blank roles appear in the Innovation section. Capitalization is not
important, but spelling is.

For executive photos, use a clear portrait. The website displays portraits in
a 3:4 frame, so leave enough space around the person for cropping.

## Publishing checklist

Before leaving Contentful, confirm:

- [ ] You edited the `master` environment.
- [ ] Every new or changed image is published.
- [ ] The Content entry is published.
- [ ] Banner Page values are `home`, `families`, or `events`.
- [ ] Executive Role values use one of the supported names.
- [ ] You checked the public website on both desktop and phone.
- [ ] You did not delete an asset that is still linked to an entry.

## When a change does not appear

Try these checks in order:

1. Refresh the website.
2. Open the page in a private/incognito window.
3. Confirm the asset says **Published**.
4. Confirm the Content entry says **Published**.
5. Confirm you edited the `master` environment.
6. For a banner, confirm its Page value matches the page name above.
7. For an executive, confirm the Role spelling.
8. Wait a few minutes and check again. Contentful’s delivery network and your
   browser may briefly cache the previous version.

Normal Contentful edits do **not** require a code change or website rebuild in
the current setup.

If the problem remains, send the site maintainer:

- the Contentful entry or asset title;
- the page where it should appear;
- a screenshot showing its Published status; and
- a screenshot of what appears on the public website.

## Things you should not change

Unless a developer specifically asks you to:

- do not change the Content model;
- do not rename fields;
- do not edit or delete API keys;
- do not change environment settings;
- do not unpublish working entries; and
- do not permanently delete linked assets.

## Official Contentful help

- [Contentful web app overview](https://www.contentful.com/help/getting-started/contentful-web-app-overview/)
- [Adding a new asset](https://www.contentful.com/help/media/managing-assets/adding-new-assets/)
- [Editing image assets](https://www.contentful.com/help/media/managing-assets/editing-image-assets/)

