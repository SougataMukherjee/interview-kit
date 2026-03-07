export class DocumentPrintHelper {
  public static printDocument(
    blob: Blob,
    fileName: string,
    shouldFocusWindowOnPrint?: boolean,
    loadSuccessCallback?: () => void,
    loadFailureCallback?: () => void,
  ): Blob {
    if (window.navigator.msSaveOrOpenBlob) {
      window.navigator.msSaveOrOpenBlob(blob, fileName);
    } else {
      const url = window.URL.createObjectURL(blob);
      const printWindow: Window | null = window.open(url, "_blank");

      if (printWindow) {
        if (loadSuccessCallback) {
          printWindow.onload = () => {
            loadSuccessCallback();
          };
        }

        if (shouldFocusWindowOnPrint) {
          printWindow.focus();
        }
      } else if (loadFailureCallback) {
        loadFailureCallback();
      }
    }

    return blob;
  }
}
