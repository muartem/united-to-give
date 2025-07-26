import Blood from '@/assets/svg/blood'
import Star from '@/assets/svg/star'

const Ul = ({
  variant,
  classNames,
  lis,
}) => {
  return (
    <ul className={`b2 flex flex-col gap-2 ${variant ? 'list-none' : ''} [&>li]:flex [&>li]:gap-4 ${classNames}`}>
      {lis.map(li => (
        <li key={li}>
          {variant === 'blood' && <Blood className="min-w-5"/>}
          {variant === 'star' && <Star className="min-w-5"/>}
          {li}
        </li>
      ))}
    </ul>
  )
}

export default Ul
