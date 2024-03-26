import { render, fireEvent, screen } from '@testing-library/react'
import SearchInput from './SearchInput'

describe('SearchInput component', () => {
  test('handles value and changes', () => {
    const mockOnChange = jest.fn()
    render(<SearchInput value='initial value' onChange={mockOnChange} />)

    const inputElement = screen.getByPlaceholderText(
      'Search...'
    ) as HTMLInputElement // Type assertion
    expect(inputElement.value).toBe('initial value')

    fireEvent.change(inputElement, { target: { value: 'new value' } })
    expect(mockOnChange).toHaveBeenCalledWith('new value')
  })
})
