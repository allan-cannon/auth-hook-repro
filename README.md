# Reproduction of issue: useAuth hook triggers unnecessary re-renders

## Running locally

1. Clone the repo
2. Add `.env.local` file with `VITE_CLERK_PUBLISHABLE_KEY={{your_publishable_key}}`
3. Install dependencies: `npm install`
4. Run the app: `npm run dev`

## Reproduction steps

1. On your local machine
   1. Pull the repo
   2. Add `.env.local` file with `VITE_CLERK_PUBLISHABLE_KEY={{your_publishable_key}}` (see `.env.example`)
   3. Install the dependencies: `npm install`
   4. Run the app: `npm run dev`
2. In the app
   0. (note that I added react scan that highlights components in purple when they re-render)
   1. Sign up by clicking the "Sign up" button and following the steps.
   2. After you have logged in you will see 2 lines of text on the screen, one with a count of renders inside a component that uses `useAuth` and one with a count of renders inside a component that does not use `useAuth`.
   3. If you wait for ~1 minute you will see some components flash purple and the render count will go up for the component that uses `useAuth` but not the component that does not use `useAuth`.
   4. If you open the devtools to the network tab you will notice that the re-renders correspond with the token refresh requests. Whenever the token is refreshed, something in the `useAuth` hook triggers a re-render even though nothing from the `useAuth` hook is used in the component.

## Expected behavior


I would expect the `useAuth` hook to not trigger re-renders more often than the listened-to properties are updated, so the render counts of both components should be the same. While my example is contrived since the auth isn't used in the component, this mimics the behavior we have in our actual app where the we are only using the `isSignedIn` property from the `useAuth` hook but it re-renders every time the token refreshes even though the `isSignedIn` property doesn't change.

We can mitigate this by moving the use of the hook into a separate component and using `React.memo`, but this requires engineers to remember that they need to do this every time they use the `useAuth` hook.

Tanstack query models this exact behavior with [tracked properties](https://tanstack.com/query/latest/docs/framework/react/guides/render-optimizations#tracked-properties).

