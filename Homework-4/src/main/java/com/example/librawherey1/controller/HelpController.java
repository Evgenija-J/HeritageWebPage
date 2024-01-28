package com.example.librawherey1.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/help")
public class HelpController {
    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    ModelAndView index()
    {
        ModelAndView mav = new ModelAndView("help");
        return mav;
    }
}
