import { useMemo, forwardRef, Ref } from 'react'
import { ListItem, ListItemIcon, ListItemText } from '@mui/material'
import { Link, LinkProps } from 'react-router-dom'

interface IListItemLinkProps extends LinkProps {
  icon?: string
  primary: string
}

const ListItemLink = ({ icon, primary, to }: IListItemLinkProps) => {
  const renderLink = useMemo(
    () =>
      forwardRef((itemProps, ref: Ref<HTMLAnchorElement>) => {
        return <Link to={to} ref={ref} {...itemProps} />
      }),
    [to]
  )

  return (
    <>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </>
  )
}

export default ListItemLink
