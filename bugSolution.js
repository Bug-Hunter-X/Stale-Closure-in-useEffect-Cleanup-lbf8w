```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct approach: use useRef
    const countRef = useRef(count);
    countRef.current = count; // update ref on each render
    return () => {
      console.log('Cleanup: count is', countRef.current); // Access the latest value
    };
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```