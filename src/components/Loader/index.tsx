import React, {FC, memo} from 'react';
import './Loader.css';

interface LoaderProps {
  additionalClasses?: string;
}

const Loader: FC<LoaderProps> = ({additionalClasses}) => (
  <div className={`component-spinner ${additionalClasses || ''}`} data-test-id="Loader">
    <i className="icon-spinner2 spinner" />
  </div>
);

export default memo(Loader);
