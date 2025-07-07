import { useAuth } from '@clerk/clerk-react';
import { useRef } from 'react';

export const WithAuth = () => {
  const { signOut, sessionId, orgId: clerkOrgId } = useAuth();
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>Renders in component that uses useAuth:</div>
        <div>{renderCount.current}</div>
      </div>
      <div style={{ paddingLeft: '2rem', fontSize: '0.8rem' }}>
        <div>Session ID: {sessionId}</div>
        <div>Org ID: {clerkOrgId}</div>
      </div>
    </div>
  );
};
