import { render, fireEvent, screen } from '@testing-library/react'
import YearPicker from './YearPicker'

describe('YearPicker component', () => {
  test('onChange retuns value', () => {
    const mockOnChange = jest.fn()

    render(<YearPicker onChange={mockOnChange} value={null} />)

    const datePicker = screen.getByLabelText('Year') as HTMLInputElement

    fireEvent.change(datePicker, { target: { value: 2020 } })
    expect(mockOnChange).toHaveBeenCalledWith(2020)
  })

  test('initial value', () => {
    render(<YearPicker onChange={() => {}} value={2022} />)

    const datePicker = screen.getByLabelText('Year') as HTMLInputElement
    expect(datePicker.value).toBe('2022')
  })

  test('clearing value', () => {
    const mockOnChange = jest.fn()
    render(<YearPicker onChange={mockOnChange} value={2022} />)

    const clearButton = screen.getByRole('button', { name: /clear/i })

    fireEvent.click(clearButton)
    expect(mockOnChange).toHaveBeenCalledWith(null)
  })
})
