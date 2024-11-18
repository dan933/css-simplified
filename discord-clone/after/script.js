const servers = document.querySelectorAll("[data-server]")
const channels = document.querySelectorAll("[data-channel]")
const channelGroupToggles = document.querySelectorAll(
  "[data-channel-group-toggle]"
)
const chatHeaderIcons = document.querySelectorAll("[data-chat-header-icon]")
const messagePopoverActions = document.querySelectorAll(
  "[data-message-popover-action]"
)
const messageInputActions = document.querySelectorAll(
  "[data-message-input-action]"
)
const usersSidebarToggleButton = document.querySelector(
  "[data-users-sidebar-toggle]"
)
const usersSidebar = document.querySelector("[data-users-sidebar]")

servers.forEach(server => {
  server.addEventListener("click", () => {
    servers.forEach(server => server.classList.remove("active"))
    server.classList.add("active")
  })
})

channels.forEach(channel => {
  channel.addEventListener("click", () => {
    channels.forEach(channel => channel.classList.remove("active"))
    channel.classList.add("active")
  })
})

channelGroupToggles.forEach(channelGroupToggle => {
  channelGroupToggle.addEventListener("click", () => {
    const channelGroup = channelGroupToggle.closest("[data-channel-group]")
    channelGroup.classList.toggle("collapsed")
  })
})

chatHeaderIcons.forEach(chatHeaderIcon => {
  chatHeaderIcon.addEventListener("click", () => {
    chatHeaderIcons.forEach(chatHeaderIcon =>
      chatHeaderIcon.classList.remove("active")
    )
    chatHeaderIcon.classList.add("active")
  })
})

messagePopoverActions.forEach(messagePopoverAction => {
  messagePopoverAction.addEventListener("click", () => {
    messagePopoverActions.forEach(messagePopoverAction =>
      messagePopoverAction.classList.remove("active")
    )
    messagePopoverAction.classList.add("active")
  })
})

messageInputActions.forEach(messageInputAction => {
  messageInputAction.addEventListener("click", () => {
    messageInputActions.forEach(messageInputAction =>
      messageInputAction.classList.remove("active")
    )
    messageInputAction.classList.add("active")
  })
})

usersSidebarToggleButton.addEventListener("click", () => {
  usersSidebar.classList.toggle("hidden")
})
