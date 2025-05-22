type ReadPermission = "read" | "no-read";
type WrtitePermission = "write" | "no-write";

type FilePermission = `${ReadPermission}-${WrtitePermission}`;

type DataFile = {
  data: string;
  permission: FilePermission;
};

type DataFileEventNames = `${keyof DataFile}Changed `;

type DataFileEvent = {
  [Key in DataFileEventNames]: () => void;
};
