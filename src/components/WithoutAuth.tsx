import { useRef } from 'react';

export const WithoutAuth = () => {
  const renderCount = useRef(0);
  renderCount.current++;

  return (
    <div
      style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem' }}
    >
      <div>Renders from component that does not use useAuth:</div>
      <div>{renderCount.current}</div>
    </div>
  );
};
