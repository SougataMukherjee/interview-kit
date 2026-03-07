import Switch from "@mui/material/Switch";
import Input from "../../ui/components/input";
import "./header.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../../ui/components/button";
import { ButtonVariant } from "../../ui/components/button";
import styled from "@emotion/styled";

const InputArea = styled.div`
  display: flex;
  gap: 1rem;
`;

export interface HeaderProps {
  onSearch: (value: string) => void;
  onToggleSidebar: (value: boolean) => void;
  sidebarOpen?: boolean;
  selectedDate: Date | null;
  onDateChange: (date: Date | null) => void;
  onPrint: () => void;
}

export const Header = ({
  onSearch,
  sidebarOpen,
  onToggleSidebar,
  selectedDate,
  onDateChange,
  onPrint,
}: HeaderProps) => {
  return (
    <header>
      <div className="storybook-header">
        <InputArea>
          <Input label="Search RO" onChange={(e) => onSearch(e.target.value)} />

          <DatePicker
            selected={selectedDate}
            onChange={(date) => onDateChange(date)}
            placeholderText="Filter by Delivery Date"
            dateFormat="dd/MM/yyyy"
            isClearable
            className="date-picker-input"
          />
        </InputArea>

        <div>
          <Switch
            checked={sidebarOpen}
            onChange={(e) => onToggleSidebar(e.target.checked)}
            color="secondary"
          />

          <Button onClick={onPrint} variant={ButtonVariant.OUTLINED}>
            Print
          </Button>
        </div>
      </div>
    </header>
  );
};
