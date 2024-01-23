export type CustomTogglerData<T> = {
  value: T
  label: string
}[]

export type CustomTogglerProps<T> = {
  value: T
  data: CustomTogglerData<T>
  onChange: (value: T) => void
}

function CustomToggler<T extends string>({
  value,
  data,
  onChange,
}: CustomTogglerProps<T>): JSX.Element {
  return (
    <div className="custom-toggler">
      {data.map((item, index) => {
        const isActive = item.value === value
        const defaultClass = 'custom-toggler__button'

        const classes = `${defaultClass} ${
          isActive ? `${defaultClass}--active` : ''
        }`

        return (
          <button
            className={classes}
            onClick={() => onChange(item.value)}
            key={index}
          >
            {item.label}
          </button>
        )
      })}
    </div>
  )
}

export default CustomToggler
