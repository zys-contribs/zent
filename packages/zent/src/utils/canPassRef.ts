import { isForwardRef } from 'react-is';
import { ElementType, ComponentType } from 'react';

export default function canPassRef(tag: ElementType) {
  if (typeof tag === 'string') {
    return false;
  }
  if (isForwardRef(tag)) {
    return true;
  }
  return typeof tag === 'function' && !!tag.prototype.isReactComponent;
}
