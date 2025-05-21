
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

export default function CustomLink({ to, children, ...props }) {

  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (

    <li {...props}>
      <Link to={to} className={`${isActive ? 'text-white bg-blue-700 xl:bg-transparent xl:text-blue-700' : 'text-gray-900 hover:bg-gray-100 xl:hover:bg-transparent xl:hover:text-blue-700'} block py-2 px-3  rounded-sm xl:p-0`}>{children}</Link>
    </li>

  )
}
