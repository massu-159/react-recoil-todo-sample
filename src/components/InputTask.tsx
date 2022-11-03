import React, { ChangeEvent, useCallback } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { addTitleState } from '../states/addTitleState';
import { inputTitleState } from '../states/inputTitleState'
import './InputTask.css'

const getKey = () => Math.random().toString(32).substring(2);

function InputTask() {
  // const inputTitle = useRecoilValue(inputTitleState);
  // const setInputTitle = useSetRecoilState(inputTitleState);
  // ↓ 上記の書き方と同義
  const [inputTitle, setInputTitle] = useRecoilState(inputTitleState);
  const [addTitle, setAddTitle] = useRecoilState(addTitleState);

  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setInputTitle(e.target.value);
    console.log(inputTitle);
  }, [inputTitle]);

  const handleClick = () => {
    setAddTitle([...addTitle, { id: getKey(), title: inputTitle }])
    setInputTitle("");
    console.log(addTitle);
  }

  return (
    <div className='inputField'>
      <input type="text" className="inputTitle" onChange={onChange} value={ inputTitle } />
      <button className="addButton" onClick={handleClick}>追加</button>
    </div>
  )
}

export default InputTask