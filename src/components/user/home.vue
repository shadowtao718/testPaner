<template>
  <div>
    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <div class="logo" style="color:#f0f0f0">老陶的作品</div>
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['2']"
          :style="{ lineHeight: '64px' }"
        >
          <a-menu-item key="1">
            nav 1
          </a-menu-item>
          <a-menu-item key="2">
            nav 2
          </a-menu-item>
          <a-menu-item key="3">
            nav 3
          </a-menu-item>
        </a-menu>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <!-- 左边的列表首页 start -->
          <a-menu
            mode="inline"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
          >
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="user" />首页</span>
              <a-menu-item key="1">
                <router-link to="/content"> option1</router-link>
              </a-menu-item>
              <a-menu-item key="2">
                <router-link to="/date"> option2</router-link>
              </a-menu-item>
              <a-menu-item key="3">
                <router-link to="/rout">vuex练习</router-link>
              </a-menu-item>
              <a-menu-item key="4">
                <router-link to="/testDemo">路由练习</router-link>
              </a-menu-item>
            </a-sub-menu>
            <!-- 左边的列表首页 end -->
            <!-- 左边的列表商品 start -->
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="laptop" />商品</span>
              <a-menu-item key="5">
                <router-link to="/applit">接收的路由</router-link>
              </a-menu-item>
              <a-menu-item key="6">
                <router-link to="/rate">评价</router-link>
              </a-menu-item>
              <a-menu-item key="7">
                option7
              </a-menu-item>
              <a-menu-item key="8">
                option8
              </a-menu-item>
            </a-sub-menu>
            <!-- 左边的列表商品 end -->
            <!-- 左边的列表交易 start -->
            <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="notification" />交易</span>
              <a-menu-item key="9">
                option9
              </a-menu-item>
              <a-menu-item key="10">
                option10
              </a-menu-item>
              <a-menu-item key="11">
                option11
              </a-menu-item>
              <a-menu-item key="12">
                option12
              </a-menu-item>
            </a-sub-menu>
            <!-- 左边的列表交易 end -->
            <a-sub-menu key="sub4">
              <span slot="title"><a-icon type="notification" />交易</span>
              <a-menu-item key="13">
                option9
              </a-menu-item>
              <a-menu-item key="14">
                option10
              </a-menu-item>
              <a-menu-item key="15">
                option11
              </a-menu-item>
              <a-menu-item key="16">
                option12
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub5">
              <span slot="title"><a-icon type="notification" />交易</span>
              <a-menu-item key="17">
                option9
              </a-menu-item>
              <a-menu-item key="18">
                option10
              </a-menu-item>
              <a-menu-item key="19">
                option11
              </a-menu-item>
              <a-menu-item key="20">
                option12
              </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub6">
              <span slot="title"><a-icon type="notification" />交易</span>
              <a-menu-item key="21">
                option9
              </a-menu-item>
              <a-menu-item key="22">
                option10
              </a-menu-item>
              <a-menu-item key="23">
                option11
              </a-menu-item>
              <a-menu-item key="24">
                option12
              </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content
            :style="{
              background: '#fff',
              padding: '24px',
              margin: 0,
              // minHeight: '280px',
            }"
          >
            <router-view></router-view>
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  methods: {
    // optClick() {
    //   this.router.push("/content");
    // },
  },
};
</script>

<style>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
