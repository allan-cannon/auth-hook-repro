import { UserButton } from '@clerk/clerk-react';
import { WithAuth } from '../components/WithAuth';
import { WithoutAuth } from '../components/WithoutAuth';

export default function IndexPage() {
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <UserButton />
      </div>
      <h1>This is the index page</h1>
      <WithoutAuth />
      <WithAuth />
    </div>
  );
}
