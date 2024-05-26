import { FieldObj, FileObj } from '@/store-types'

export interface Til extends FileObj {
  global: Global
}

export interface Global extends FieldObj {
  use_alpha: UseAlpha
  tile_num: number
}

export enum UseAlpha {
  NONE = 0,
  MIXED = 1,
  TRANSPARENT = 2
}
