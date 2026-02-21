
import  Switch  from '@mui/material/Switch';
import Input from '../../ui/components/input'
import * as React from 'react'
import './header.css';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
}

export const Header = ({ user,  }: HeaderProps) => {
const [checked, setChecked] = React.useState(true);
 const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
  }
  return(
  <header>
    <div className="storybook-header">
      <div>
        {user ?(<><Input value='test' onChange={()=>{}} label="Search"/></>):(<></>)}
      </div>
      <div>
          <>
            <Switch  checked={checked} onChange={handleChange} />
            <Switch checked={checked} onChange={handleChange} color="secondary"/>
            
          </>
        
      </div>
    </div>
  </header>
  )};
