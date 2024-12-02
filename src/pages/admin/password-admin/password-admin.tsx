import React from 'react'
import classes from './password-admin.module.css'
import Button from '@/components/button'
import { ButtonVariants } from '@/button-variants/buttons-variants-enum'

const PasswordAdmin = () => {
  return (
    <div className={classes.container}>
        <form action="">
          <label htmlFor="admin">Admin's password</label>
          <input type="password" placeholder="password" />
          <Button variant={ButtonVariants.Default}>Done</Button>
        </form>
      </div>
  )
}

export default PasswordAdmin