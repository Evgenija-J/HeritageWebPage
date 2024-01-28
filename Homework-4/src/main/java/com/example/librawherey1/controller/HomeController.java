package com.example.librawherey1.controller;

import com.example.librawherey1.model.heritage_table;
import com.example.librawherey1.service.MonumentService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import java.util.ArrayList;

@Controller
@RequestMapping("/index")
public class HomeController {

    private MonumentService monumentService;

    public HomeController(MonumentService mService) {
        this.monumentService = mService;
    }

    @RequestMapping(method = RequestMethod.GET)
    @ResponseBody
    ModelAndView index() {

        ModelAndView mav = new ModelAndView("index");

        ArrayList<heritage_table> monuments = monumentService.findAll();
        mav.addObject("monuments", monuments);

        return mav;

    }

}
