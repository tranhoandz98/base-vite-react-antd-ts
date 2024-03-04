import { EllipsisOutlined, PlusOutlined } from '@ant-design/icons'
import type { ActionType, ProColumns } from '@ant-design/pro-components'
import { ProTable, TableDropdown } from '@ant-design/pro-components'
import { Button, Dropdown, Space, Table, Tag } from 'antd'
import axios from 'axios'
import { useRef } from 'react'

type GithubIssueItem = {
  url: string
  id: number
  number: number
  title: string
  labels: {
    name: string
    color: string
  }[]
  state: string
  comments: number
  created_at: string
  updated_at: string
  closed_at?: string
}

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'index',
    width: 48,
    title: '#',
    fixed: 'left'
  },
  {
    title: 'title',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    width: 120,
    tooltip: 'Titles that are too long will automatically shrink',
    formItemProps: {
      rules: [
        {
          required: true,
          message: 'This is required'
        }
      ]
    },
    fieldProps: {
      placeholder: 'Enter title'
    }
  },
  {
    disable: true,
    title: 'state',
    dataIndex: 'state',
    width: 120,
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: 'select',
    valueEnum: {
      all: { text: 'extra long'.repeat(50) },
      open: {
        text: 'unsolved',
        status: 'Error'
      },
      closed: {
        text: 'solved',
        status: 'Success',
        disabled: true
      },
      processing: {
        text: 'Resolving',
        status: 'Processing'
      }
    },
    fieldProps: {
      placeholder: 'Choose state'
    }
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    dataIndex: 'labels',
    width: 120,
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    dataIndex: 'labels',
    width: 120,
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    width: 120,
    title: 'Label',
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    dataIndex: 'labels',
    width: 120,
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    dataIndex: 'labels',
    width: 120,
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    dataIndex: 'labels',
    width: 120,
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    disable: true,
    title: 'Label',
    width: 120,
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    title: 'created_at',
    key: 'showTime',
    width: 120,
    dataIndex: 'created_at',
    valueType: 'date',
    sorter: true,
    hideInSearch: true
  },
  {
    title: 'created_at',
    width: 120,
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true,
    search: {
      transform: (value) => {
        return {
          startTime: value[0],
          endTime: value[1]
        }
      }
    }
  },
  {
    title: 'operate',
    valueType: 'option',
    key: 'option',
    width: 120,
    fixed: 'right',
    render: (__, record, _, action) => [
      <a
        key='editable'
        onClick={() => {
          action?.startEditable?.(record.id)
        }}
      >
        edit
      </a>,
      <TableDropdown
        key='actionGroup'
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: 'copy' },
          { key: 'delete', name: 'delete' }
        ]}
      />
    ]
  }
]

export default function Datatable() {
  const actionRef = useRef<ActionType>()
  return (
    <ProTable<GithubIssueItem>
      columns={columns}
      actionRef={actionRef}
      // cardBordered
      bordered
      rowSelection={{
        selections: [Table.SELECTION_ALL, Table.SELECTION_NONE],
        defaultSelectedRowKeys: []
      }}
      request={async (params, sort, filter) => {
        console.log('sort: ', { sort, filter })
        const res = await axios.get('https://proapi.azurewebsites.net/github/issues', {
          params
        })

        return res.data
      }}
      editable={{
        type: 'multiple'
      }}
      columnsState={{
        persistenceKey: 'pro-table-singe-demos',
        persistenceType: 'localStorage',
        defaultValue: {
          option: { fixed: 'right', disable: true }
        },
        onChange(value) {
          console.log('value: ', value)
        }
      }}
      rowKey='id'
      search={{
        labelWidth: 'auto'
      }}
      options={{
        setting: {
          listsHeight: 400
        }
      }}
      scroll={{ x: 1300 }}
      form={{
        labelWrap: true,
        layout: 'vertical'
      }}
      pagination={{
        pageSize: 5
        // onChange: (page) => console.log(page)
        // showTotal: (total, range) => (
        //   <div>
        //     <span>
        //       Show <b>{range[0]}</b> to <b>{range[1]}</b> in <b>{total}</b>
        //     </span>
        //   </div>
        // )
      }}
      ghost={true}
      dateFormatter='string'
      headerTitle='Advanced forms'
      tableAlertRender={({ selectedRowKeys, onCleanSelected }) => {
        return (
          <Space size={24}>
            <span>
              selected {selectedRowKeys.length} item
              <Button style={{ marginInlineStart: 8 }} onClick={onCleanSelected}>
                cancel selection
              </Button>
            </span>
          </Space>
        )
      }}
      toolBarRender={() => [
        <Button
          key='button'
          icon={<PlusOutlined />}
          onClick={() => {
            actionRef.current?.reload()
          }}
          type='primary'
        >
          New
        </Button>,
        <Dropdown
          key='menu'
          menu={{
            items: [
              {
                label: '1st item',
                key: '1'
              },
              {
                label: '2nd item',
                key: '1'
              },
              {
                label: '3rd item',
                key: '1'
              }
            ]
          }}
        >
          <Button>
            <EllipsisOutlined />
          </Button>
        </Dropdown>
      ]}
    />
  )
}
