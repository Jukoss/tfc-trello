import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  numeric: { input: any; output: any; }
  timestamptz: { input: any; output: any; }
  uuid: { input: any; output: any; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** columns and relationships of "boards" */
export type Boards = {
  __typename?: 'boards';
  /** fetch data from the table: "columns" */
  columns: Array<Columns>;
  /** fetch aggregated fields from the table: "columns" */
  columns_aggregate: Columns_Aggregate;
  createAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  title: Scalars['String']['output'];
};


/** columns and relationships of "boards" */
export type BoardsColumnsArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};


/** columns and relationships of "boards" */
export type BoardsColumns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

/** aggregated selection of "boards" */
export type Boards_Aggregate = {
  __typename?: 'boards_aggregate';
  aggregate?: Maybe<Boards_Aggregate_Fields>;
  nodes: Array<Boards>;
};

/** aggregate fields of "boards" */
export type Boards_Aggregate_Fields = {
  __typename?: 'boards_aggregate_fields';
  count: Scalars['Int']['output'];
  max?: Maybe<Boards_Max_Fields>;
  min?: Maybe<Boards_Min_Fields>;
};


/** aggregate fields of "boards" */
export type Boards_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Boards_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Boolean expression to filter rows from the table "boards". All fields are combined with a logical 'AND'. */
export type Boards_Bool_Exp = {
  _and?: InputMaybe<Array<Boards_Bool_Exp>>;
  _not?: InputMaybe<Boards_Bool_Exp>;
  _or?: InputMaybe<Array<Boards_Bool_Exp>>;
  columns?: InputMaybe<Columns_Bool_Exp>;
  columns_aggregate?: InputMaybe<Columns_Aggregate_Bool_Exp>;
  createAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "boards" */
export enum Boards_Constraint {
  /** unique or primary key constraint on columns "id" */
  BoardsPkey = 'boards_pkey'
}

/** input type for inserting data into table "boards" */
export type Boards_Insert_Input = {
  columns?: InputMaybe<Columns_Arr_Rel_Insert_Input>;
  createAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Boards_Max_Fields = {
  __typename?: 'boards_max_fields';
  createAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Boards_Min_Fields = {
  __typename?: 'boards_min_fields';
  createAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "boards" */
export type Boards_Mutation_Response = {
  __typename?: 'boards_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Boards>;
};

/** on_conflict condition type for table "boards" */
export type Boards_On_Conflict = {
  constraint: Boards_Constraint;
  update_columns?: Array<Boards_Update_Column>;
  where?: InputMaybe<Boards_Bool_Exp>;
};

/** Ordering options when selecting data from "boards". */
export type Boards_Order_By = {
  columns_aggregate?: InputMaybe<Columns_Aggregate_Order_By>;
  createAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: boards */
export type Boards_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "boards" */
export enum Boards_Select_Column {
  /** column name */
  CreateAt = 'createAt',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "boards" */
export type Boards_Set_Input = {
  createAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Streaming cursor of the table "boards" */
export type Boards_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Boards_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Boards_Stream_Cursor_Value_Input = {
  createAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** update columns of table "boards" */
export enum Boards_Update_Column {
  /** column name */
  CreateAt = 'createAt',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title'
}

export type Boards_Updates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Boards_Set_Input>;
  /** filter the rows which have to be updated */
  where: Boards_Bool_Exp;
};

/** columns and relationships of "carts" */
export type Carts = {
  __typename?: 'carts';
  columnId: Scalars['uuid']['output'];
  createAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  order: Scalars['numeric']['output'];
  title: Scalars['String']['output'];
};

/** aggregated selection of "carts" */
export type Carts_Aggregate = {
  __typename?: 'carts_aggregate';
  aggregate?: Maybe<Carts_Aggregate_Fields>;
  nodes: Array<Carts>;
};

export type Carts_Aggregate_Bool_Exp = {
  count?: InputMaybe<Carts_Aggregate_Bool_Exp_Count>;
};

export type Carts_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Carts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Carts_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "carts" */
export type Carts_Aggregate_Fields = {
  __typename?: 'carts_aggregate_fields';
  avg?: Maybe<Carts_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Carts_Max_Fields>;
  min?: Maybe<Carts_Min_Fields>;
  stddev?: Maybe<Carts_Stddev_Fields>;
  stddev_pop?: Maybe<Carts_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Carts_Stddev_Samp_Fields>;
  sum?: Maybe<Carts_Sum_Fields>;
  var_pop?: Maybe<Carts_Var_Pop_Fields>;
  var_samp?: Maybe<Carts_Var_Samp_Fields>;
  variance?: Maybe<Carts_Variance_Fields>;
};


/** aggregate fields of "carts" */
export type Carts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Carts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "carts" */
export type Carts_Aggregate_Order_By = {
  avg?: InputMaybe<Carts_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Carts_Max_Order_By>;
  min?: InputMaybe<Carts_Min_Order_By>;
  stddev?: InputMaybe<Carts_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Carts_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Carts_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Carts_Sum_Order_By>;
  var_pop?: InputMaybe<Carts_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Carts_Var_Samp_Order_By>;
  variance?: InputMaybe<Carts_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "carts" */
export type Carts_Arr_Rel_Insert_Input = {
  data: Array<Carts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Carts_On_Conflict>;
};

/** aggregate avg on columns */
export type Carts_Avg_Fields = {
  __typename?: 'carts_avg_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "carts" */
export type Carts_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "carts". All fields are combined with a logical 'AND'. */
export type Carts_Bool_Exp = {
  _and?: InputMaybe<Array<Carts_Bool_Exp>>;
  _not?: InputMaybe<Carts_Bool_Exp>;
  _or?: InputMaybe<Array<Carts_Bool_Exp>>;
  columnId?: InputMaybe<Uuid_Comparison_Exp>;
  createAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "carts" */
export enum Carts_Constraint {
  /** unique or primary key constraint on columns "id" */
  CartsPkey = 'carts_pkey'
}

/** input type for incrementing numeric columns in table "carts" */
export type Carts_Inc_Input = {
  order?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "carts" */
export type Carts_Insert_Input = {
  columnId?: InputMaybe<Scalars['uuid']['input']>;
  createAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Carts_Max_Fields = {
  __typename?: 'carts_max_fields';
  columnId?: Maybe<Scalars['uuid']['output']>;
  createAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "carts" */
export type Carts_Max_Order_By = {
  columnId?: InputMaybe<Order_By>;
  createAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Carts_Min_Fields = {
  __typename?: 'carts_min_fields';
  columnId?: Maybe<Scalars['uuid']['output']>;
  createAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "carts" */
export type Carts_Min_Order_By = {
  columnId?: InputMaybe<Order_By>;
  createAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "carts" */
export type Carts_Mutation_Response = {
  __typename?: 'carts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Carts>;
};

/** on_conflict condition type for table "carts" */
export type Carts_On_Conflict = {
  constraint: Carts_Constraint;
  update_columns?: Array<Carts_Update_Column>;
  where?: InputMaybe<Carts_Bool_Exp>;
};

/** Ordering options when selecting data from "carts". */
export type Carts_Order_By = {
  columnId?: InputMaybe<Order_By>;
  createAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: carts */
export type Carts_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "carts" */
export enum Carts_Select_Column {
  /** column name */
  ColumnId = 'columnId',
  /** column name */
  CreateAt = 'createAt',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "carts" */
export type Carts_Set_Input = {
  columnId?: InputMaybe<Scalars['uuid']['input']>;
  createAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Carts_Stddev_Fields = {
  __typename?: 'carts_stddev_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "carts" */
export type Carts_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Carts_Stddev_Pop_Fields = {
  __typename?: 'carts_stddev_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "carts" */
export type Carts_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Carts_Stddev_Samp_Fields = {
  __typename?: 'carts_stddev_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "carts" */
export type Carts_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "carts" */
export type Carts_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Carts_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Carts_Stream_Cursor_Value_Input = {
  columnId?: InputMaybe<Scalars['uuid']['input']>;
  createAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Carts_Sum_Fields = {
  __typename?: 'carts_sum_fields';
  order?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "carts" */
export type Carts_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "carts" */
export enum Carts_Update_Column {
  /** column name */
  ColumnId = 'columnId',
  /** column name */
  CreateAt = 'createAt',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Title = 'title'
}

export type Carts_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Carts_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Carts_Set_Input>;
  /** filter the rows which have to be updated */
  where: Carts_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Carts_Var_Pop_Fields = {
  __typename?: 'carts_var_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "carts" */
export type Carts_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Carts_Var_Samp_Fields = {
  __typename?: 'carts_var_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "carts" */
export type Carts_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Carts_Variance_Fields = {
  __typename?: 'carts_variance_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "carts" */
export type Carts_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** columns and relationships of "columns" */
export type Columns = {
  __typename?: 'columns';
  boardId: Scalars['uuid']['output'];
  /** An array relationship */
  carts: Array<Carts>;
  /** An aggregate relationship */
  carts_aggregate: Carts_Aggregate;
  createAt: Scalars['timestamptz']['output'];
  id: Scalars['uuid']['output'];
  order: Scalars['numeric']['output'];
  title: Scalars['String']['output'];
};


/** columns and relationships of "columns" */
export type ColumnsCartsArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


/** columns and relationships of "columns" */
export type ColumnsCarts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};

/** aggregated selection of "columns" */
export type Columns_Aggregate = {
  __typename?: 'columns_aggregate';
  aggregate?: Maybe<Columns_Aggregate_Fields>;
  nodes: Array<Columns>;
};

export type Columns_Aggregate_Bool_Exp = {
  count?: InputMaybe<Columns_Aggregate_Bool_Exp_Count>;
};

export type Columns_Aggregate_Bool_Exp_Count = {
  arguments?: InputMaybe<Array<Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
  filter?: InputMaybe<Columns_Bool_Exp>;
  predicate: Int_Comparison_Exp;
};

/** aggregate fields of "columns" */
export type Columns_Aggregate_Fields = {
  __typename?: 'columns_aggregate_fields';
  avg?: Maybe<Columns_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Columns_Max_Fields>;
  min?: Maybe<Columns_Min_Fields>;
  stddev?: Maybe<Columns_Stddev_Fields>;
  stddev_pop?: Maybe<Columns_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Columns_Stddev_Samp_Fields>;
  sum?: Maybe<Columns_Sum_Fields>;
  var_pop?: Maybe<Columns_Var_Pop_Fields>;
  var_samp?: Maybe<Columns_Var_Samp_Fields>;
  variance?: Maybe<Columns_Variance_Fields>;
};


/** aggregate fields of "columns" */
export type Columns_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Columns_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** order by aggregate values of table "columns" */
export type Columns_Aggregate_Order_By = {
  avg?: InputMaybe<Columns_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Columns_Max_Order_By>;
  min?: InputMaybe<Columns_Min_Order_By>;
  stddev?: InputMaybe<Columns_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Columns_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Columns_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Columns_Sum_Order_By>;
  var_pop?: InputMaybe<Columns_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Columns_Var_Samp_Order_By>;
  variance?: InputMaybe<Columns_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "columns" */
export type Columns_Arr_Rel_Insert_Input = {
  data: Array<Columns_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Columns_On_Conflict>;
};

/** aggregate avg on columns */
export type Columns_Avg_Fields = {
  __typename?: 'columns_avg_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by avg() on columns of table "columns" */
export type Columns_Avg_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "columns". All fields are combined with a logical 'AND'. */
export type Columns_Bool_Exp = {
  _and?: InputMaybe<Array<Columns_Bool_Exp>>;
  _not?: InputMaybe<Columns_Bool_Exp>;
  _or?: InputMaybe<Array<Columns_Bool_Exp>>;
  boardId?: InputMaybe<Uuid_Comparison_Exp>;
  carts?: InputMaybe<Carts_Bool_Exp>;
  carts_aggregate?: InputMaybe<Carts_Aggregate_Bool_Exp>;
  createAt?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  order?: InputMaybe<Numeric_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "columns" */
export enum Columns_Constraint {
  /** unique or primary key constraint on columns "id" */
  ColumnsPkey = 'columns_pkey'
}

/** input type for incrementing numeric columns in table "columns" */
export type Columns_Inc_Input = {
  order?: InputMaybe<Scalars['numeric']['input']>;
};

/** input type for inserting data into table "columns" */
export type Columns_Insert_Input = {
  boardId?: InputMaybe<Scalars['uuid']['input']>;
  carts?: InputMaybe<Carts_Arr_Rel_Insert_Input>;
  createAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Columns_Max_Fields = {
  __typename?: 'columns_max_fields';
  boardId?: Maybe<Scalars['uuid']['output']>;
  createAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by max() on columns of table "columns" */
export type Columns_Max_Order_By = {
  boardId?: InputMaybe<Order_By>;
  createAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Columns_Min_Fields = {
  __typename?: 'columns_min_fields';
  boardId?: Maybe<Scalars['uuid']['output']>;
  createAt?: Maybe<Scalars['timestamptz']['output']>;
  id?: Maybe<Scalars['uuid']['output']>;
  order?: Maybe<Scalars['numeric']['output']>;
  title?: Maybe<Scalars['String']['output']>;
};

/** order by min() on columns of table "columns" */
export type Columns_Min_Order_By = {
  boardId?: InputMaybe<Order_By>;
  createAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "columns" */
export type Columns_Mutation_Response = {
  __typename?: 'columns_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Columns>;
};

/** on_conflict condition type for table "columns" */
export type Columns_On_Conflict = {
  constraint: Columns_Constraint;
  update_columns?: Array<Columns_Update_Column>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

/** Ordering options when selecting data from "columns". */
export type Columns_Order_By = {
  boardId?: InputMaybe<Order_By>;
  carts_aggregate?: InputMaybe<Carts_Aggregate_Order_By>;
  createAt?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  order?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
};

/** primary key columns input for table: columns */
export type Columns_Pk_Columns_Input = {
  id: Scalars['uuid']['input'];
};

/** select columns of table "columns" */
export enum Columns_Select_Column {
  /** column name */
  BoardId = 'boardId',
  /** column name */
  CreateAt = 'createAt',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "columns" */
export type Columns_Set_Input = {
  boardId?: InputMaybe<Scalars['uuid']['input']>;
  createAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Columns_Stddev_Fields = {
  __typename?: 'columns_stddev_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev() on columns of table "columns" */
export type Columns_Stddev_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Columns_Stddev_Pop_Fields = {
  __typename?: 'columns_stddev_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_pop() on columns of table "columns" */
export type Columns_Stddev_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Columns_Stddev_Samp_Fields = {
  __typename?: 'columns_stddev_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by stddev_samp() on columns of table "columns" */
export type Columns_Stddev_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** Streaming cursor of the table "columns" */
export type Columns_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Columns_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Columns_Stream_Cursor_Value_Input = {
  boardId?: InputMaybe<Scalars['uuid']['input']>;
  createAt?: InputMaybe<Scalars['timestamptz']['input']>;
  id?: InputMaybe<Scalars['uuid']['input']>;
  order?: InputMaybe<Scalars['numeric']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Columns_Sum_Fields = {
  __typename?: 'columns_sum_fields';
  order?: Maybe<Scalars['numeric']['output']>;
};

/** order by sum() on columns of table "columns" */
export type Columns_Sum_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** update columns of table "columns" */
export enum Columns_Update_Column {
  /** column name */
  BoardId = 'boardId',
  /** column name */
  CreateAt = 'createAt',
  /** column name */
  Id = 'id',
  /** column name */
  Order = 'order',
  /** column name */
  Title = 'title'
}

export type Columns_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Columns_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Columns_Set_Input>;
  /** filter the rows which have to be updated */
  where: Columns_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Columns_Var_Pop_Fields = {
  __typename?: 'columns_var_pop_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_pop() on columns of table "columns" */
export type Columns_Var_Pop_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Columns_Var_Samp_Fields = {
  __typename?: 'columns_var_samp_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by var_samp() on columns of table "columns" */
export type Columns_Var_Samp_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Columns_Variance_Fields = {
  __typename?: 'columns_variance_fields';
  order?: Maybe<Scalars['Float']['output']>;
};

/** order by variance() on columns of table "columns" */
export type Columns_Variance_Order_By = {
  order?: InputMaybe<Order_By>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "boards" */
  delete_boards?: Maybe<Boards_Mutation_Response>;
  /** delete single row from the table: "boards" */
  delete_boards_by_pk?: Maybe<Boards>;
  /** delete data from the table: "carts" */
  delete_carts?: Maybe<Carts_Mutation_Response>;
  /** delete single row from the table: "carts" */
  delete_carts_by_pk?: Maybe<Carts>;
  /** delete data from the table: "columns" */
  delete_columns?: Maybe<Columns_Mutation_Response>;
  /** delete single row from the table: "columns" */
  delete_columns_by_pk?: Maybe<Columns>;
  /** insert data into the table: "boards" */
  insert_boards?: Maybe<Boards_Mutation_Response>;
  /** insert a single row into the table: "boards" */
  insert_boards_one?: Maybe<Boards>;
  /** insert data into the table: "carts" */
  insert_carts?: Maybe<Carts_Mutation_Response>;
  /** insert a single row into the table: "carts" */
  insert_carts_one?: Maybe<Carts>;
  /** insert data into the table: "columns" */
  insert_columns?: Maybe<Columns_Mutation_Response>;
  /** insert a single row into the table: "columns" */
  insert_columns_one?: Maybe<Columns>;
  /** update data of the table: "boards" */
  update_boards?: Maybe<Boards_Mutation_Response>;
  /** update single row of the table: "boards" */
  update_boards_by_pk?: Maybe<Boards>;
  /** update multiples rows of table: "boards" */
  update_boards_many?: Maybe<Array<Maybe<Boards_Mutation_Response>>>;
  /** update data of the table: "carts" */
  update_carts?: Maybe<Carts_Mutation_Response>;
  /** update single row of the table: "carts" */
  update_carts_by_pk?: Maybe<Carts>;
  /** update multiples rows of table: "carts" */
  update_carts_many?: Maybe<Array<Maybe<Carts_Mutation_Response>>>;
  /** update data of the table: "columns" */
  update_columns?: Maybe<Columns_Mutation_Response>;
  /** update single row of the table: "columns" */
  update_columns_by_pk?: Maybe<Columns>;
  /** update multiples rows of table: "columns" */
  update_columns_many?: Maybe<Array<Maybe<Columns_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_BoardsArgs = {
  where: Boards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Boards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_CartsArgs = {
  where: Carts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Carts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootDelete_ColumnsArgs = {
  where: Columns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Columns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


/** mutation root */
export type Mutation_RootInsert_BoardsArgs = {
  objects: Array<Boards_Insert_Input>;
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Boards_OneArgs = {
  object: Boards_Insert_Input;
  on_conflict?: InputMaybe<Boards_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CartsArgs = {
  objects: Array<Carts_Insert_Input>;
  on_conflict?: InputMaybe<Carts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Carts_OneArgs = {
  object: Carts_Insert_Input;
  on_conflict?: InputMaybe<Carts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_ColumnsArgs = {
  objects: Array<Columns_Insert_Input>;
  on_conflict?: InputMaybe<Columns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Columns_OneArgs = {
  object: Columns_Insert_Input;
  on_conflict?: InputMaybe<Columns_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_BoardsArgs = {
  _set?: InputMaybe<Boards_Set_Input>;
  where: Boards_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Boards_By_PkArgs = {
  _set?: InputMaybe<Boards_Set_Input>;
  pk_columns: Boards_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Boards_ManyArgs = {
  updates: Array<Boards_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_CartsArgs = {
  _inc?: InputMaybe<Carts_Inc_Input>;
  _set?: InputMaybe<Carts_Set_Input>;
  where: Carts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Carts_By_PkArgs = {
  _inc?: InputMaybe<Carts_Inc_Input>;
  _set?: InputMaybe<Carts_Set_Input>;
  pk_columns: Carts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Carts_ManyArgs = {
  updates: Array<Carts_Updates>;
};


/** mutation root */
export type Mutation_RootUpdate_ColumnsArgs = {
  _inc?: InputMaybe<Columns_Inc_Input>;
  _set?: InputMaybe<Columns_Set_Input>;
  where: Columns_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Columns_By_PkArgs = {
  _inc?: InputMaybe<Columns_Inc_Input>;
  _set?: InputMaybe<Columns_Set_Input>;
  pk_columns: Columns_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Columns_ManyArgs = {
  updates: Array<Columns_Updates>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']['input']>;
  _gt?: InputMaybe<Scalars['numeric']['input']>;
  _gte?: InputMaybe<Scalars['numeric']['input']>;
  _in?: InputMaybe<Array<Scalars['numeric']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['numeric']['input']>;
  _lte?: InputMaybe<Scalars['numeric']['input']>;
  _neq?: InputMaybe<Scalars['numeric']['input']>;
  _nin?: InputMaybe<Array<Scalars['numeric']['input']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "boards" */
  boards: Array<Boards>;
  /** fetch aggregated fields from the table: "boards" */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** An array relationship */
  carts: Array<Carts>;
  /** An aggregate relationship */
  carts_aggregate: Carts_Aggregate;
  /** fetch data from the table: "carts" using primary key columns */
  carts_by_pk?: Maybe<Carts>;
  /** fetch data from the table: "columns" */
  columns: Array<Columns>;
  /** fetch aggregated fields from the table: "columns" */
  columns_aggregate: Columns_Aggregate;
  /** fetch data from the table: "columns" using primary key columns */
  columns_by_pk?: Maybe<Columns>;
};


export type Query_RootBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


export type Query_RootBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


export type Query_RootBoards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootCartsArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


export type Query_RootCarts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


export type Query_RootCarts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Query_RootColumnsArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};


export type Query_RootColumns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};


export type Query_RootColumns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "boards" */
  boards: Array<Boards>;
  /** fetch aggregated fields from the table: "boards" */
  boards_aggregate: Boards_Aggregate;
  /** fetch data from the table: "boards" using primary key columns */
  boards_by_pk?: Maybe<Boards>;
  /** fetch data from the table in a streaming manner: "boards" */
  boards_stream: Array<Boards>;
  /** An array relationship */
  carts: Array<Carts>;
  /** An aggregate relationship */
  carts_aggregate: Carts_Aggregate;
  /** fetch data from the table: "carts" using primary key columns */
  carts_by_pk?: Maybe<Carts>;
  /** fetch data from the table in a streaming manner: "carts" */
  carts_stream: Array<Carts>;
  /** fetch data from the table: "columns" */
  columns: Array<Columns>;
  /** fetch aggregated fields from the table: "columns" */
  columns_aggregate: Columns_Aggregate;
  /** fetch data from the table: "columns" using primary key columns */
  columns_by_pk?: Maybe<Columns>;
  /** fetch data from the table in a streaming manner: "columns" */
  columns_stream: Array<Columns>;
};


export type Subscription_RootBoardsArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


export type Subscription_RootBoards_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Boards_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Boards_Order_By>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


export type Subscription_RootBoards_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootBoards_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Boards_Stream_Cursor_Input>>;
  where?: InputMaybe<Boards_Bool_Exp>;
};


export type Subscription_RootCartsArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


export type Subscription_RootCarts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Carts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Carts_Order_By>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


export type Subscription_RootCarts_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootCarts_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Carts_Stream_Cursor_Input>>;
  where?: InputMaybe<Carts_Bool_Exp>;
};


export type Subscription_RootColumnsArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};


export type Subscription_RootColumns_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Columns_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Columns_Order_By>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};


export type Subscription_RootColumns_By_PkArgs = {
  id: Scalars['uuid']['input'];
};


export type Subscription_RootColumns_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Columns_Stream_Cursor_Input>>;
  where?: InputMaybe<Columns_Bool_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']['input']>;
  _gt?: InputMaybe<Scalars['timestamptz']['input']>;
  _gte?: InputMaybe<Scalars['timestamptz']['input']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['timestamptz']['input']>;
  _lte?: InputMaybe<Scalars['timestamptz']['input']>;
  _neq?: InputMaybe<Scalars['timestamptz']['input']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']['input']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']['input']>;
  _gt?: InputMaybe<Scalars['uuid']['input']>;
  _gte?: InputMaybe<Scalars['uuid']['input']>;
  _in?: InputMaybe<Array<Scalars['uuid']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['uuid']['input']>;
  _lte?: InputMaybe<Scalars['uuid']['input']>;
  _neq?: InputMaybe<Scalars['uuid']['input']>;
  _nin?: InputMaybe<Array<Scalars['uuid']['input']>>;
};

export type AddBoardMutationVariables = Exact<{
  title?: InputMaybe<Scalars['String']['input']>;
}>;


export type AddBoardMutation = { __typename?: 'mutation_root', insert_boards_one?: { __typename?: 'boards', createAt: any, id: any, title: string } | null };

export type AddCartMutationVariables = Exact<{
  columnId: Scalars['uuid']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['numeric']['input']>;
}>;


export type AddCartMutation = { __typename?: 'mutation_root', insert_carts_one?: { __typename?: 'carts', columnId: any, createAt: any, id: any, order: any, title: string } | null };

export type AddColumnMutationVariables = Exact<{
  boardId: Scalars['uuid']['input'];
  title?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['numeric']['input']>;
}>;


export type AddColumnMutation = { __typename?: 'mutation_root', insert_columns_one?: { __typename?: 'columns', createAt: any, id: any, order: any, title: string } | null };

export type GetBoardByIdQueryVariables = Exact<{
  id: Scalars['uuid']['input'];
}>;


export type GetBoardByIdQuery = { __typename?: 'query_root', boards_by_pk?: { __typename?: 'boards', createAt: any, id: any, title: string, columns: Array<{ __typename?: 'columns', createAt: any, id: any, order: any, title: string, carts: Array<{ __typename?: 'carts', createAt: any, id: any, order: any, title: string }> }> } | null };

export type GetBoardsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBoardsQuery = { __typename?: 'query_root', boards: Array<{ __typename?: 'boards', createAt: any, id: any, title: string }> };


export const AddBoardDocument = gql`
    mutation AddBoard($title: String) {
  insert_boards_one(object: {title: $title}) {
    createAt
    id
    title
  }
}
    `;
export type AddBoardMutationFn = Apollo.MutationFunction<AddBoardMutation, AddBoardMutationVariables>;

/**
 * __useAddBoardMutation__
 *
 * To run a mutation, you first call `useAddBoardMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBoardMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBoardMutation, { data, loading, error }] = useAddBoardMutation({
 *   variables: {
 *      title: // value for 'title'
 *   },
 * });
 */
export function useAddBoardMutation(baseOptions?: Apollo.MutationHookOptions<AddBoardMutation, AddBoardMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBoardMutation, AddBoardMutationVariables>(AddBoardDocument, options);
      }
export type AddBoardMutationHookResult = ReturnType<typeof useAddBoardMutation>;
export type AddBoardMutationResult = Apollo.MutationResult<AddBoardMutation>;
export type AddBoardMutationOptions = Apollo.BaseMutationOptions<AddBoardMutation, AddBoardMutationVariables>;
export const AddCartDocument = gql`
    mutation AddCart($columnId: uuid!, $title: String, $order: numeric) {
  insert_carts_one(object: {columnId: $columnId, title: $title, order: $order}) {
    columnId
    createAt
    id
    order
    title
  }
}
    `;
export type AddCartMutationFn = Apollo.MutationFunction<AddCartMutation, AddCartMutationVariables>;

/**
 * __useAddCartMutation__
 *
 * To run a mutation, you first call `useAddCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addCartMutation, { data, loading, error }] = useAddCartMutation({
 *   variables: {
 *      columnId: // value for 'columnId'
 *      title: // value for 'title'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useAddCartMutation(baseOptions?: Apollo.MutationHookOptions<AddCartMutation, AddCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddCartMutation, AddCartMutationVariables>(AddCartDocument, options);
      }
export type AddCartMutationHookResult = ReturnType<typeof useAddCartMutation>;
export type AddCartMutationResult = Apollo.MutationResult<AddCartMutation>;
export type AddCartMutationOptions = Apollo.BaseMutationOptions<AddCartMutation, AddCartMutationVariables>;
export const AddColumnDocument = gql`
    mutation AddColumn($boardId: uuid!, $title: String, $order: numeric) {
  insert_columns_one(object: {boardId: $boardId, title: $title, order: $order}) {
    createAt
    id
    order
    title
  }
}
    `;
export type AddColumnMutationFn = Apollo.MutationFunction<AddColumnMutation, AddColumnMutationVariables>;

/**
 * __useAddColumnMutation__
 *
 * To run a mutation, you first call `useAddColumnMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddColumnMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addColumnMutation, { data, loading, error }] = useAddColumnMutation({
 *   variables: {
 *      boardId: // value for 'boardId'
 *      title: // value for 'title'
 *      order: // value for 'order'
 *   },
 * });
 */
export function useAddColumnMutation(baseOptions?: Apollo.MutationHookOptions<AddColumnMutation, AddColumnMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddColumnMutation, AddColumnMutationVariables>(AddColumnDocument, options);
      }
export type AddColumnMutationHookResult = ReturnType<typeof useAddColumnMutation>;
export type AddColumnMutationResult = Apollo.MutationResult<AddColumnMutation>;
export type AddColumnMutationOptions = Apollo.BaseMutationOptions<AddColumnMutation, AddColumnMutationVariables>;
export const GetBoardByIdDocument = gql`
    query GetBoardById($id: uuid!) {
  boards_by_pk(id: $id) {
    createAt
    id
    title
    columns {
      createAt
      id
      order
      title
      carts {
        createAt
        id
        order
        title
      }
    }
  }
}
    `;

/**
 * __useGetBoardByIdQuery__
 *
 * To run a query within a React component, call `useGetBoardByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBoardByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBoardByIdQuery, GetBoardByIdQueryVariables> & ({ variables: GetBoardByIdQueryVariables; skip?: boolean; } | { skip: boolean; }) ) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoardByIdQuery, GetBoardByIdQueryVariables>(GetBoardByIdDocument, options);
      }
export function useGetBoardByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoardByIdQuery, GetBoardByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoardByIdQuery, GetBoardByIdQueryVariables>(GetBoardByIdDocument, options);
        }
export function useGetBoardByIdSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBoardByIdQuery, GetBoardByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBoardByIdQuery, GetBoardByIdQueryVariables>(GetBoardByIdDocument, options);
        }
export type GetBoardByIdQueryHookResult = ReturnType<typeof useGetBoardByIdQuery>;
export type GetBoardByIdLazyQueryHookResult = ReturnType<typeof useGetBoardByIdLazyQuery>;
export type GetBoardByIdSuspenseQueryHookResult = ReturnType<typeof useGetBoardByIdSuspenseQuery>;
export type GetBoardByIdQueryResult = Apollo.QueryResult<GetBoardByIdQuery, GetBoardByIdQueryVariables>;
export const GetBoardsDocument = gql`
    query GetBoards {
  boards {
    createAt
    id
    title
  }
}
    `;

/**
 * __useGetBoardsQuery__
 *
 * To run a query within a React component, call `useGetBoardsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBoardsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBoardsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBoardsQuery(baseOptions?: Apollo.QueryHookOptions<GetBoardsQuery, GetBoardsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBoardsQuery, GetBoardsQueryVariables>(GetBoardsDocument, options);
      }
export function useGetBoardsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBoardsQuery, GetBoardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBoardsQuery, GetBoardsQueryVariables>(GetBoardsDocument, options);
        }
export function useGetBoardsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetBoardsQuery, GetBoardsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetBoardsQuery, GetBoardsQueryVariables>(GetBoardsDocument, options);
        }
export type GetBoardsQueryHookResult = ReturnType<typeof useGetBoardsQuery>;
export type GetBoardsLazyQueryHookResult = ReturnType<typeof useGetBoardsLazyQuery>;
export type GetBoardsSuspenseQueryHookResult = ReturnType<typeof useGetBoardsSuspenseQuery>;
export type GetBoardsQueryResult = Apollo.QueryResult<GetBoardsQuery, GetBoardsQueryVariables>;