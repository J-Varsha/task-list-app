import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Container } from "@material-ui/core";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css";
import { useSelector, useDispatch } from 'react-redux'
import { simpleAction } from '../reduxs/actions/simpleAction';

export default function Notes() {
  const dispatch = useDispatch();
  const [notes, setNotes] = useState([]);
  let redux_data = useSelector((state) => state.simpleReducer.list)
  console.log('nots screen-->', redux_data);

  useEffect(() => {
    setNotes(redux_data);
  }, []);

  const handleDelete = (i) => {
    let arr = redux_data;

    const newNotes = arr.filter((note, index) => index != i);
    console.log('newNotesnewNotes', newNotes);
    dispatch(simpleAction(newNotes));
    setNotes(newNotes);
  };

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note, index) => (
          <div item key={note.id}>
            <NoteCard note={note} index={index} handleDelete={()=> handleDelete(index)} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
}
