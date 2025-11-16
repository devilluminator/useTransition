# React useTransition Hook Example

This project demonstrates the use of React's `useTransition` hook with TypeScript and Bun.

## What is useTransition?

The `useTransition` hook allows you to mark updates as transitions, which can be interrupted. This is particularly useful for UI interactions that might cause performance issues, such as filtering large lists or switching tabs with heavy content.

## Examples Included

1. **Basic Example**: Shows how typing in an input field can trigger expensive computations without blocking the UI
2. **Tab Switching Example**: Demonstrates smooth tab navigation while loading heavy content

## How to Run

1. Make sure you have [Bun](https://bun.sh/) installed
2. Install dependencies:
   ```bash
   bun install
   ```
3. Start the development server:
   ```bash
   bun run start
   ```
4. Open your browser to http://localhost:3000

## Key Features Demonstrated

- Non-blocking UI updates
- Pending state indication
- Smooth user experience during heavy computations
- Proper TypeScript typing

## Learn More

- [React Documentation on useTransition](https://react.dev/reference/react/useTransition)
- [Bun Documentation](https://bun.sh/docs)