import React from 'react';
import { useRouteData } from 'react-static';
//
import { Link } from 'components/Router';
import MuiLink from '@material-ui/core/Link';

export default function Post() {
  const { post } = useRouteData();

  return (
    <div>
      <MuiLink component={Link} to="/blog/">
        Back
      </MuiLink>

      <br />
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </div>
  );
}
