import {Modal,Button,Input,Select,InputNumber} from 'antd'
import { UseAppConteBooks } from '../../../../context/booksAdmin/context'
import { useDispatch, useSelector } from 'react-redux'
import { addBookHide } from '../../../../redux/slices/BooksAdmin'
import { Upload } from 'antd';
//import { useState } from 'react';
const {TextArea}=Input
import './style.css'
import { useState } from 'react';
import { TagsInput } from "react-tag-input-component";
import { postBook } from '../../../../redux/slices/bookSlicesAPI';

export function AddBooks(){

    const Context=UseAppConteBooks()
    const addBooksStatus=useSelector((state)=>state.bookAdmin.addBook)
    const dispatch=useDispatch()
    // const [file,setFileList]=useState()
    // const onChange = ({ fileList: newFileList }) => {
    //     setFileList(newFileList);
    //   }
    const [fileList, setFileList] = useState([]);
    const [selected, setSelected] = useState([])
    const [data,setData]=useState({
        title:"",
        publisher:"",
        classifications:0,
        review_point:0,
        year:"",
        desc:"",
        isAvailable:true
    })
    const haandleChangeClass=(value)=>{
        setData({...data,classifications:value})
    }
    const handleChangePoint=(value)=>{
        setData({...data,review_point:value})
    }
    const handleChange = (e) => {
        const { name, value, type, checked } = event.target //event target destructuring

        setData((prevFormData) => {
            //set State Value
            return {
                ...prevFormData, //take prev state to new object
                [name]: type === 'checkbox' ? checked : value, // if type is checkbox the value will be checked (bolean value) else the value willl be value of input
            }
        })
    }
      const onChange = ({ fileList: newFileList }) => {
        setFileList(newFileList)
      };
    const onPreview = async (file) => {
        let src = file.url;
        if (!src) {
          src = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file.originFileObj);
            reader.onload = () => resolve(reader.result);
          });
        }
        const image = new Image();
        image.src = src;
        const imgWindow = window.open(src);
        imgWindow?.document.write(image.outerHTML);
      };
      const handleOk=()=>{
        dispatch(postBook({...data,reiew_keys:selected,image:null}))
      }
      console.log({data,selected})
    return(
        <Modal
            onCancel={()=>dispatch(addBookHide())}
            width="60vw"
            open={addBooksStatus}
            footer={[<Button
                type='primary'
                key="crete"
                onClick={handleOk}
                >
                    {console.log()}
                    Create Books
                    </Button>]}>
            
                    <div style={{
                        display:'flex'
                    }}>
                        {/* <img width="400px" src="https://images.tokopedia.net/img/cache/700/VqbcmM/2021/8/21/09b8ebef-8831-4c30-9f55-80bced95ebb6.png" alt="" /> */}
                        <div style={{width:'100%'}}>
                        <div></div>
                        <Upload
                           // action="http://103.193.176.43:3000/api/v1/books"
                            listType="picture-card"
                            
                            // fileList={fileList}
                            // onChange={onChange}
                            // onPreview={onPreview}
                            fileList={fileList}
                            onChange={onChange}
                            onPreview={onPreview}
                            
                        >
                            {fileList.length < 1 && '+ Upload'}
                        </Upload>
                        </div>
                        <div>
                            <div>
                            <p>Title</p>
                            
                            <Input style={{width:300}}
                            name='title' 
                            value={data.title}
                            onChange={handleChange}
                            />

                           
                            </div>

                            <div>
                            <p>Publisher</p>
                            
                            <Input style={{width:300}}
                            name='publisher' 
                            value={data.publisher}
                            onChange={handleChange}
                            />
                            
                           
                            </div>
                            <div>
                            <p>Year</p>
                            
                            <Input style={{width:300}}
                            name='year' 
                            value={data.year}
                            onChange={handleChange}
                            />
                            
                           
                            </div>
                            <div style={{
                                display:'flex'
                            }}>
                                <div
                                style={{
                                    flexGrow:"1"
                                }}>
                                <p>Category</p>
                                <Select
                                style={{
                                    width: 180,
                                }}
                                options={[
                                    {
                                        value:0,
                                        label:"Buku Sekolah"
                                    },
                                    {
                                        value:1,
                                        label:"Novel"
                                    },
                                    {
                                        value:2,
                                        label:"Sejarah"
                                    },
                                    {
                                        value:4,
                                        label:"Biografi"
                                    }
                                ]}
                                name="classifications"
                                onChange={haandleChangeClass}
                                
                                value={data.classifications}
                               />
                                </div>
                                <div>
                                <p>Point</p>
                                <InputNumber
                                 min={0} 
                                 max={1000000} 
                                 defaultValue={0}
                                 value={data.review_point}
                                 name='review_point'
                                 onChange={handleChangePoint}/>
                                </div>
                            </div>
                            <div>
                            <p>Key Points</p>
                            <TagsInput
                            value={selected}
                            onChange={setSelected}
                            //name=""
                            placeHolder="enter book review keys"
                        />
                            
                            {/* <Input 
                            value={data.review_keys}
                            name='eview_keys'
                            //onClick={}
                            style={{width:240,margin:0}}/>
                            <Button type='primary'>Add</Button> */}
                            {/* <div>
                                {
                                    book.KeyPoints.map((item,idx)=>{
                                        return(
                                           
                                            <Tag closeIcon key={idx}
                                             style={{
                                                marginRight:"0"
                                            }} color="blue"
                                            >{item}</Tag>
                                            
                                        )
                                    })
                                }
                                
                            </div> */}
                            </div>
                            <div>
                            <p>Description</p>
                            <TextArea 
                            rows={4}
                            name="desc"
                            value={data.desc}
                            onChange={handleChange}
                            />
                            </div>
                        </div>
                    </div>

        </Modal>
    )
}