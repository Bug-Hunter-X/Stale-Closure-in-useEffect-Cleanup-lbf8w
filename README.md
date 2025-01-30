# Stale Closure in React useEffect Cleanup

This example demonstrates a common error in React's `useEffect` hook: accessing a stale closure variable within the cleanup function.  The `count` variable is captured when the effect is created, not when the cleanup function is executed.  After the component unmounts, `count` retains its value from the previous render, leading to incorrect logging or potential memory leaks in more complex scenarios.

## Problem
The cleanup function uses the `count` variable. However, by the time the cleanup function runs (component unmount), the value of `count` is no longer the current value. This is a stale closure and can cause unpredictable behavior.