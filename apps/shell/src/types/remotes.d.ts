declare module 'productApp/ProductApp' {
  import { ComponentType } from 'react';
  const ProductApp: ComponentType;
  export default ProductApp;
}

declare module 'userApp/UserApp' {
  import { ComponentType } from 'react';
  const UserApp: ComponentType;
  export default UserApp;
}

declare module '@micro-frontend/shared' {
  export const Button: React.ComponentType<any>;
  export const Card: React.ComponentType<any>;
  export const Modal: React.ComponentType<any>;
}