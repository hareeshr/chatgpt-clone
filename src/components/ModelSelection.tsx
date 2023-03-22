"use client"
import useSWR from "swr"
import Select from 'react-select'

const fetchModels = () => fetch('/api/getEngines').then(res => res.json())

function ModelSelection() {

    //get all models from ChatGPT API
    const {data : models, isLoading } = useSWR('models', fetchModels)

    //set default model
    const { data:model, mutate: setModel} = useSWR('model', {
        fallbackData: 'text-davinci-003'
    })
  return (
    <div className="mt-2">
        <Select 
            className="mt-2"
            options={models?.modelOptions}
            defaultValue={model}
            isSearchable
            isLoading={isLoading}
            menuPosition='fixed'
            classNames={{
                control: (state) => "bg-[#000] border-[#434654] text-white-700"
            }}
            onChange={(e : any) => setModel(e.value)}
        />
    </div>
  )
}

export default ModelSelection