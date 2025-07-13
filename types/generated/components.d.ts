import type { Schema, Struct } from '@strapi/strapi';

export interface CommonSeo extends Struct.ComponentSchema {
  collectionName: 'components_common_seos';
  info: {
    displayName: 'SEO';
  };
  attributes: {
    bottom_description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
    extra_js: Schema.Attribute.Text;
    keywords: Schema.Attribute.Text;
    meta_description: Schema.Attribute.Text;
    meta_title: Schema.Attribute.String;
    og_description: Schema.Attribute.Text;
    og_image: Schema.Attribute.Media<'images'>;
    og_title: Schema.Attribute.String;
    top_description: Schema.Attribute.RichText &
      Schema.Attribute.CustomField<
        'plugin::ckeditor5.CKEditor',
        {
          preset: 'defaultHtml';
        }
      >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'common.seo': CommonSeo;
    }
  }
}
