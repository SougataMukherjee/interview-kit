// MimeType enum - add all file types your app supports
export enum MimeType {
  APPLICATION_PDF = 'application/pdf',
  VIDEO_MP4 = 'video/mp4',
  VIDEO_MPEG = 'video/mpeg',
  VIDEO_AVI = 'video/avi',
  VIDEO_MOV = 'video/mov',
  VIDEO_WMV = 'video/wmv',
  AUDIO_MPEG = 'audio/mpeg',
  APPLICATION_MS_EXCEL = 'application/vnd.ms-excel',
  APPLICATION_OPEN_OFFICE_EXCEL = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  APPLICATION_MS_WORD = 'application/msword',
  APPLICATION_OPEN_OFFICE_WORD = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  IMAGE_JPEG = 'image/jpeg',
  IMAGE_PNG = 'image/png',
  IMAGE_GIF = 'image/gif',
  IMAGE_BMP = 'image/bmp',
}

// FileIconFont enum - map to your icon library class names or icon keys
export enum FileIconFont {
  PDF = 'icon-pdf',
  VIDEO = 'icon-video',
  AUDIO = 'icon-audio',
  EXCEL = 'icon-excel',
  WORD = 'icon-word',
  GENERIC = 'icon-generic',
}

export const getFileIconByType = (
  type: string,
  thumbnailUrl?: string
): string | undefined => {
  switch (type) {
    case MimeType.APPLICATION_PDF:
      return FileIconFont.PDF;

    case MimeType.VIDEO_MP4:
    case MimeType.VIDEO_MPEG:
    case MimeType.VIDEO_AVI:
    case MimeType.VIDEO_MOV:
    case MimeType.VIDEO_WMV:
      return thumbnailUrl ? undefined : FileIconFont.VIDEO;

    case MimeType.AUDIO_MPEG:
      return FileIconFont.AUDIO;

    case MimeType.APPLICATION_MS_EXCEL:
    case MimeType.APPLICATION_OPEN_OFFICE_EXCEL:
      return FileIconFont.EXCEL;

    case MimeType.APPLICATION_MS_WORD:
    case MimeType.APPLICATION_OPEN_OFFICE_WORD:
      return FileIconFont.WORD;

    case MimeType.IMAGE_JPEG:
    case MimeType.IMAGE_PNG:
    case MimeType.IMAGE_GIF:
    case MimeType.IMAGE_BMP:
      return undefined;

    default:
      return FileIconFont.GENERIC;
  }
};

// Helper: get human-readable label for a mime type
export const getFileTypeLabel = (type: string): string => {
  const labels: Record<string, string> = {
    [MimeType.APPLICATION_PDF]: 'PDF',
    [MimeType.VIDEO_MP4]: 'Video',
    [MimeType.VIDEO_MPEG]: 'Video',
    [MimeType.VIDEO_AVI]: 'Video',
    [MimeType.VIDEO_MOV]: 'Video',
    [MimeType.VIDEO_WMV]: 'Video',
    [MimeType.AUDIO_MPEG]: 'Audio',
    [MimeType.APPLICATION_MS_EXCEL]: 'Excel',
    [MimeType.APPLICATION_OPEN_OFFICE_EXCEL]: 'Excel',
    [MimeType.APPLICATION_MS_WORD]: 'Word',
    [MimeType.APPLICATION_OPEN_OFFICE_WORD]: 'Word',
    [MimeType.IMAGE_JPEG]: 'Image',
    [MimeType.IMAGE_PNG]: 'Image',
    [MimeType.IMAGE_GIF]: 'Image',
    [MimeType.IMAGE_BMP]: 'Image',
  };
  return labels[type] ?? 'File';
};

// Helper: check if a mime type is an image
export const isImageType = (type: string): boolean =>
  [MimeType.IMAGE_JPEG, MimeType.IMAGE_PNG, MimeType.IMAGE_GIF, MimeType.IMAGE_BMP].includes(
    type as MimeType
  );

// Helper: check if a mime type is a video
export const isVideoType = (type: string): boolean =>
  [MimeType.VIDEO_MP4, MimeType.VIDEO_MPEG, MimeType.VIDEO_AVI, MimeType.VIDEO_MOV, MimeType.VIDEO_WMV].includes(
    type as MimeType
  );

// Helper: check if a mime type is a document
export const isDocumentType = (type: string): boolean =>
  [
    MimeType.APPLICATION_PDF,
    MimeType.APPLICATION_MS_WORD,
    MimeType.APPLICATION_OPEN_OFFICE_WORD,
    MimeType.APPLICATION_MS_EXCEL,
    MimeType.APPLICATION_OPEN_OFFICE_EXCEL,
  ].includes(type as MimeType);