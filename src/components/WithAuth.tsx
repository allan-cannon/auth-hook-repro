import { useAuth } from '@clerk/clerk-react';
import { useRef } from 'react';

export const WithAuth = () => {
  useAuth();
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>Renders from component that uses useAuth:</div>
      <div>{renderCount.current}</div>
    </div>
  );
};
