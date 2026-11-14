export default function MyComponent({ value , handleChange , labelname}) {
    return (
        <>
         <label htmlFor={labelname}>{labelname} : </label>
          <input
            type="tel"
            id="phone"
            value={value}
            onChange={(e) =>
                handleChange(e.target.value )
            }
            placeholder="Enter your phone number"
            required
          />
        </>
    )
}