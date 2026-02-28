
import  Switch  from '@mui/material/Switch';
import Input from '../../ui/components/input'
import './header.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './header.css';


type User = {
  name: string;
};
export interface ItemDescription {
  roNumber: string
  name: string
  vehicle: string
  estimator: string
}

export interface ItemDetails {
  preferenceCompany: string
  shop: string
  dueIn: string
  dueOut: string
}

export interface ItemDates {
  started: string
  completed: string
  deliveryDate: string
  totalCosts: string
}

export interface ItemAmounts {
  salesTotal: string
  subtotal: string
  salesTotal2: string
  grossProfitAmount: string
}

export interface ItemPercentages {
  grossProfitPercent: string
  hrsProfit: string
  hrsPercent: string
  hrsLeft: string
}
export interface ItemData {
  description: ItemDescription
  details: ItemDetails
  dates: ItemDates
  amounts: ItemAmounts
  percentages: ItemPercentages
}

export interface DetailsData {
  id: string
  partsNew: string
  partsAM: string
  partsUsed: string
  glass: string
  partsOthers: string
  paint: string
  body: string
  mech: string
  frame: string
  misc: string
  detail: string
  labourOther: string
  sublet: string
  customLabour: string
  customTax: string
  payableTaxes: string
}

export interface HeaderProps {
  user?: User;
  onLogin?: () => void;
  onLogout?: () => void;
  onCreateAccount?: () => void;
  onSearch: (value: string) => void
  onToggleSidebar: (value:boolean) => void;
  sidebarOpen?:boolean;
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
   
}

export const Header = ({  onSearch,sidebarOpen,onToggleSidebar,selectedDate,
  onDateChange, }: HeaderProps) => {

  return(
  <header>
    <div className="storybook-header">
      <div>
        <Input label="Search RO"
        onChange={(e) => onSearch(e.target.value)}/>
        {/* 📅 React DatePicker */}
        <DatePicker
          selected={selectedDate}
          onChange={(date) => onDateChange(date)}
          placeholderText="Filter by Delivery Date"
          dateFormat="dd/MM/yyyy"
          isClearable
          className="date-picker-input"
        />
      </div>
      <div>
          <>
            <Switch  checked={sidebarOpen} onChange={(e) => onToggleSidebar(e.target.checked)} color="secondary" />
            {/* <Switch checked={checked} onChange={handleChange} color="secondary"/> */}
            
          </>
        
      </div>
    </div>
  </header>
  )};
