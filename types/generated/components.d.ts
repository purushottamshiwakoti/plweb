import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedMenu extends Schema.Component {
  collectionName: 'components_shared_menus';
  info: {
    displayName: 'Menu';
    description: '';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
    submenu: Attribute.Component<'shared.sub-menu', true>;
  };
}

export interface SharedSHaredImage extends Schema.Component {
  collectionName: 'components_shared_s_hared_images';
  info: {
    displayName: 'SharedImage';
    description: '';
  };
  attributes: {
    Image: Attribute.Media & Attribute.Required;
    Alt: Attribute.String & Attribute.Required;
  };
}

export interface SharedSubMenu extends Schema.Component {
  collectionName: 'components_shared_sub_menus';
  info: {
    displayName: 'Sub Menu';
  };
  attributes: {
    Name: Attribute.String & Attribute.Required;
    Link: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.menu': SharedMenu;
      'shared.s-hared-image': SharedSHaredImage;
      'shared.sub-menu': SharedSubMenu;
    }
  }
}
