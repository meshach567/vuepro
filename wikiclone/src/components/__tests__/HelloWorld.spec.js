import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import WikiComponent from '../WikiComponent.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(WikiComponent, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
