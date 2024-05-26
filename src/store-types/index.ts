export interface SkinObj {
  type: ObjType
}

export interface FileObj extends SkinObj {
  type: ObjType.FILE
  value: FieldObj
}

export interface FieldObj extends SkinObj {
  type: ObjType.FIELD
  value: PropObj
}

export interface PropObj extends SkinObj {
  type: ObjType.PROP
  value: ValObj
}

export interface ValObj extends SkinObj {
  type: ObjType.VAL
  value: unknown
}

export enum ObjType {
  FILE = 'file',
  FIELD = 'field',
  PROP = 'prop',
  VAL = 'val'
}
