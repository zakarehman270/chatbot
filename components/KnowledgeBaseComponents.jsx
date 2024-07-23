import { Button } from '@material-tailwind/react'
import React from 'react'
import { useSelector } from 'react-redux';
import TableSortable from './TableSortable';
const KnowledgeBaseComponent = ({ setShowModalKnowledgeBase }) => {
  const { KnowledgeBaseData } = useSelector((state) => state.GeneralCrudOperation);
    const Headers = [
        {
            Header: 'title',
            accessor: 'title',
        },
        {
            Header: 'Category',
            accessor: 'Category',
        },
        {
            Header: 'Product',
            accessor: 'Product',
        },
        {
            Header: 'Service',
            accessor: 'Service',
        },
        {
            Header: 'description',
            accessor: 'description',
        },
        {
            Header: 'Action',
            accessor: 'action',
        },
    ]
  return (
    <div>
      <div className='mob-flex justify-content-between align-items-center'>
        <h1 className=' MainHeading mb-3 '>
          Knowledge Base
        </h1>
        <Button onClick={() => {
          setShowModalKnowledgeBase(true)
        }}>
          Add Knowledge Base
        </Button>
      </div>
      <TableSortable
        data={KnowledgeBaseData}
        columns={Headers}
        LinkView={"knowledge-base/view"}
        SearchData={'title'}
        DeleteName={"Knowledge Base"}
      />
    </div>
  )
}

export default KnowledgeBaseComponent