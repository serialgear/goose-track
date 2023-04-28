import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Formik } from 'formik';
import { format, isAfter, isValid, parse } from 'date-fns';
import * as Yup from 'yup';
import * as STC from './TaskForm.styled';
import icon from '../../images/sprite.svg';

export const TaskForm = ({ taskFormData, status, onClose }) => {
  // const [title, setTitle] = useState(task?.title || '');
  // const [start, setStart] = useState(task?.start || '');
  // const [end, setEnd] = useState(task?.end || '');
  // const [priority, setPriority] = useState(task?.priority || 'low');
  taskFormData = {
    title: 'To do urgent1',
    start: '10:30',
    end: '12:00',
    priority: 'Medium',
    date: '2023-04-27',
  };

  const initialValues = {
    title: taskFormData?.title || '',
    start: taskFormData?.start || '',
    end: taskFormData?.end || '',
    priority: taskFormData?.priority || 'low',
  };

  const { currentDay } = useParams();

  const handleAdd = () => {};

  const validationSchema = Yup.object({
    title: Yup.string()
      .required('Title is required')
      .max(250, 'Title should not exceed 250 characters'),
    start: Yup.string()
      .test('valid-time', 'Invalid time format', value =>
        isValid(parse(value, 'HH:mm', new Date()))
      )
      .required('Start is required'),
    end: Yup.string()
      .test('valid-time', 'Invalid time format', value =>
        isValid(parse(value, 'HH:mm', new Date()))
      )
      .when('start', (start, schema) =>
        schema.test(
          'end-time-greater',
          'End time should be greater than start time',
          end =>
            start && end
              ? isAfter(
                  parse(end, 'HH:mm', new Date()),
                  parse(start, 'HH:mm', new Date())
                )
              : true
        )
      )
      .required('End is required'),
    priority: Yup.string()
      .required('Priority is required')
      .oneOf(['low', 'medium', 'high'], 'Invalid priority'),
  });

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmit={handleSubmit}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={() => {
          console.log('handleSubmit called');
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          setFieldValue,
          /* and other goodies */
        }) => (
          <STC.Form onSubmit={handleSubmit}>
            <STC.Label htmlFor="title">
              <STC.Span>Title</STC.Span>
              <STC.Input
                type="text"
                name="title"
                id="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
                placeholder="Enter text"
              />
              <STC.Errors>
                {errors.title && touched.title && errors.title}
              </STC.Errors>
            </STC.Label>

            <STC.Wrapper>
              <STC.Label htmlFor="start">
                <STC.Span>Start</STC.Span>
                <STC.Input
                  type="time"
                  step="60"
                  name="start"
                  id="start"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.start}
                  placeholder="Select time"
                />
                <STC.Errors>
                  {errors.start && touched.start && errors.start}
                </STC.Errors>
              </STC.Label>

              <STC.Label htmlFor="end">
                <STC.Span>End</STC.Span>
                <STC.Input
                  type="time"
                  step="60"
                  name="end"
                  id="end"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.end}
                  placeholder="Select time"
                />
                <STC.Errors>
                  {errors.end && touched.end && errors.end}
                </STC.Errors>
              </STC.Label>
            </STC.Wrapper>

            <STC.RadioButtonGroup>
              {['Low', 'Medium', 'High'].map(priority => (
                <STC.RadioButtonLabel key={priority}>
                  <STC.RadioButtonInput
                    type="radio"
                    value={priority}
                    name="priority"
                    checked={values.priority === priority}
                    onChange={() => {
                      setFieldValue('priority', priority);
                    }}
                  />
                  {priority}
                </STC.RadioButtonLabel>
              ))}
            </STC.RadioButtonGroup>

            <STC.Wrapper>
              {taskFormData ? (
                <>
                  <STC.Button
                    type="submit"
                    onClick={handleAdd}
                    disabled={isSubmitting}
                  >
                    <STC.Svg>
                      <use href={`${icon}#add-btn-s`} />
                    </STC.Svg>
                    Add
                  </STC.Button>
                  <STC.ButtonCancel
                    type="button"
                    disabled={isSubmitting}
                    onClick={() => {
                      console.log('CLOSE BTN');
                    }}
                  >
                    Cancel
                  </STC.ButtonCancel>
                </>
              ) : (
                <STC.Button
                  type="submit"
                  onClick={() => {
                    console.log('handleSubmit called');
                  }}
                  disabled={isSubmitting}
                >
                  <STC.Svg>
                    <use href={`${icon}#edit-btn-s`} />
                  </STC.Svg>
                  Edit
                </STC.Button>
              )}
            </STC.Wrapper>
          </STC.Form>
        )}
      </Formik>
    </>
  );
};
