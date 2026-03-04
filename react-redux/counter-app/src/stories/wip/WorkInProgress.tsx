import React from 'react'
import {
  Box,
  Typography,
} from '@mui/material'
import {Header} from '../headers/Header'
import SlatContent from '../content/SlatContent'
import type { SlatItem } from '../content/SlatContent'
import Sidebar from '../sidebar/Sidebar'
import { pdf } from "@react-pdf/renderer";
import { DocumentPrintHelper } from "../../ui/common/utility/DocumentPrintHelper";
import SlatPdfDocument from '../content/SlatPdfDocument'


export interface WorkInProgressProps {
  items: SlatItem[]
}

const WorkInProgress: React.FC<WorkInProgressProps> = ({ items }) => {
  const [sidebarOpen, setSidebarOpen] = React.useState<boolean>(false)
  const [search, setSearch] = React.useState<string>('')
  const [selectedItem, setSelectedItem] = React.useState<SlatItem | null>(null);
  const [check,setCheck]=React.useState<boolean>(false)
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);
  
  

const filteredItems = React.useMemo(() => {
  return items.filter(item => {

    const matchesSearch =
      !search.trim() ||
      item.itemData.description.roNumber
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesDate =
      !selectedDate ||
      new Date(item.itemData.dates.deliveryDate).toDateString() ===
        selectedDate.toDateString();

    return matchesSearch && matchesDate;

  });
}, [search, selectedDate, items]);



  /** 📌 Open sidebar with selected item */
  const handleItemSelect = (item: SlatItem) => {
    setSelectedItem(item)
    setSidebarOpen(true)
  }
const handlePrint = async () => {
  try {
    const dataToPrint = check ? filteredItems : items;

    const blob = await pdf(
      <SlatPdfDocument items={dataToPrint} />
    ).toBlob();

    DocumentPrintHelper.printDocument(
      blob,
      "WorkInProgress.pdf",
      true
    );

  } catch (error) {
    console.error("Print error:", error);
  }
};

  return (
    <Box sx={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* HEADER */}
      <Header
        onSearch={setSearch}
        sidebarOpen={check}
        onToggleSidebar={setCheck}
        selectedDate={selectedDate}
        onDateChange={setSelectedDate}
        onPrint={handlePrint}
      />

      {/* MAIN CONTENT */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        <SlatContent
          items={filteredItems}
          onItemSelect={handleItemSelect}
          sidebarOpen={check}
          onToggleSidebar={setCheck}
          searchText={search}
        />

        {filteredItems.length === 0 && (
          <Typography sx={{ mt: 4 }} color="text.secondary">
            No records found
          </Typography>
        )}
      </Box>

      {/* RIGHT SIDEBAR */}
      <Sidebar
        open={sidebarOpen}
        anchor="right"
        onClose={() => setSidebarOpen(false)}
        detailsData={selectedItem?.detailsData}
      />
    </Box>
  )
}

export default WorkInProgress