import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import PolicyDocument from '../ui/PolicyDocument';
import { POLICIES } from '../../data/policies';

/** Renders a single policy document based on the `:slug` route parameter. */
const PolicyPage: React.FC = () => {
  const { slug = '' } = useParams();
  const policy = POLICIES[slug];

  if (!policy) return <Navigate to="/policy" replace />;

  return <PolicyDocument policy={policy} />;
};

export default PolicyPage;
