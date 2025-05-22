type ReadPermission = "read" | "no-read";
type WritePermission = "write" | "no-write";

type FilePermission = `${ReadPermission}-${WritePermission}`;

type DataFile = {
  data: string;
  permission: FilePermission;
};

type DataFileEventNames = `${keyof DataFile}Changed `;

type DataFileEvent = {
  [Key in DataFileEventNames]: () => void;
};
