import { shallowMount } from "@vue/test-utils"
import { TmListItem } from "@/index"
import htmlBeautify from "html-beautify"

describe("TmListItem", () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TmListItem, {
      propsData: {
        type: null,
        title: null,
        subtitle: null,
        image: null,
        icon: null,
        to: null,
        dt: null,
        dd: null,
        href: null,
        spin: null
      }
    })
  })

  it("has the expected html structure", () => {
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it("should show a thumb", () => {
    wrapper.setProps({ dt: "Link", href: "/location" })
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
    wrapper.setProps({ icon: "icon_hello" })
    expect(wrapper.find("i")).toBeDefined()
    wrapper.setProps({ icon: null, image: "path/to/img" })
    expect(wrapper.find("img")).toBeDefined()
  })

  it("should use a slot for a thumb", () => {
    wrapper = shallowMount(TmListItem, {
      propsData: { dt: "Link", href: "/location" },
      slots: { graphic: "<graphic-elem />" }
    })
    expect(wrapper.contains("graphic-elem")).toBe(true)
  })

  it("should show a description", () => {
    wrapper.setProps({ dt: "Link", href: "/location" })
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
    expect(wrapper.html()).toContain("Link")
    wrapper.setProps({ dd: "HALLO" })
    expect(wrapper.html()).toContain("HALLO")
  })

  it("should use a slot for a description", () => {
    wrapper = shallowMount(TmListItem, {
      propsData: { dt: "Link", to: "/location" },
      slots: { dd: "Some description here" }
    })
    expect(wrapper.html()).toContain("Some description here")
  })

  it("should show a dd link", () => {
    wrapper.setProps({ dt: "Link", href: "/location" })
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it("should show a router-link", () => {
    wrapper.setProps({ dt: "Link", to: "/location" })
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it("should show a label", () => {
    wrapper.setProps({ title: "Title", subtitle: "Subtitle" })
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
    expect(wrapper.html()).toContain("Title")
    expect(wrapper.html()).toContain("Subtitle")
  })

  it("should show as dd text", () => {
    wrapper.setProps({ dt: "Link" })
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it("should show as text link", () => {
    wrapper.setProps({ dt: "Link" })
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it("should show a subtitle router link", () => {
    wrapper.setProps({ to: "/location" })
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it("should show as text", () => {
    wrapper.setProps({ title: "Link" })
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
  })

  it("should show as image", () => {
    wrapper = shallowMount(TmListItem, {
      propsData: { type: "image" },
      slots: { image: '<img src="route/to/image" />' }
    })
    expect(wrapper.find("img")).toBeDefined()
  })

  it("should append the fa-spin class", () => {
    wrapper.setProps({
      title: "Connecting...",
      spin: "true",
      icon: "rotate_right"
    })
    expect(htmlBeautify(wrapper.html())).toMatchSnapshot()
    expect(wrapper.html()).toContain("fa-spin")
  })
})
