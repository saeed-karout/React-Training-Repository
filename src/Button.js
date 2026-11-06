import './Button.css';
export default function Button({numberHello,numberDescription,children = 'here is no children'}) {
  
  return (
    <button className="TagBtn">
        <div>Hello {numberHello}</div>
        <div>{children}</div>
        <p>description {numberDescription}</p>
    </button>
  )
}

